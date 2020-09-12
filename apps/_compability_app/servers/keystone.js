const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { getAdapter } = require("@core/keystone/adapter.utils");
const { getCookieSecret } = require("@core/keystone/keystone.utils");
const { registerSchemas } = require("@core/keystone/schema");
const conf = require('@core/config');
const { createItems } = require("@keystonejs/server-side-graphql-client");
const fs = require("fs");
const path = require("path");

const noop = () => {};
const createKeystoneApp = (onConnectCb = noop) => {
    const keystone = new Keystone({
        cookieSecret: getCookieSecret(conf.COOKIE_SECRET),
        cookie: {
            sameSite: false,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 130, // 130 days
        },
        name: conf.PROJECT_NAME,
        adapter: getAdapter(conf.DATABASE_URL),
        defaultAccess: { list: false, field: true, custom: false },
        queryLimits: { maxTotalResults: 1000 },
        onConnect: async () => {
            if (conf.NODE_ENV !== "development") return // Just for dev purposes!

            // This function can be called before tables are created! (we just ignore this)
            try {
                const users = await keystone.lists.User.adapter.findAll()
                if (!users.length) {
                    const initialData = require("./initial-data")
                    for (let { listKey, items } of initialData) {
                        await createItems({
                            keystone,
                            listKey,
                            items,
                        })
                    }
                }

                // TODO(pahaz): need to fix it!!! `keystone.createItems` replaced to `createItems`! example above ^^ (part#1)
                // fs.readdirSync("./db_source").forEach(async file => {
                //     const users_data = require(`./db_source/${file}`)
                //     await keystone.createItems(users_data)
                // });
            } catch (e) {
                console.warn("Keystone.onConnect() Error:", e)
            }
        },
    });

    const modules_list = fs.readdirSync("./schema").map(file => require(`../schema/${file}`));
    registerSchemas(keystone, modules_list);

    const auth_strategy = keystone.createAuthStrategy({
        type: PasswordAuthStrategy,
        list: "User",
    });

    onConnectCb();

    return {
        keystone,
        auth_strategy
    }
};

module.exports = {
    createKeystoneApp,
};
