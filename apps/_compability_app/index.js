const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { StaticApp } = require('@keystonejs/app-static');
const { NextApp } = require('@keystonejs/app-next');

const conf = require('@core/config');

const { createKeystoneApp } = require("./servers/keystone");
const { initSocketServer } = require("./servers/socket");

const {keystone, auth_strategy} = createKeystoneApp(initSocketServer);

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
        new StaticApp({ path: conf.MEDIA_URL, src: conf.MEDIA_ROOT }),
        new AdminUIApp({ authStrategy: auth_strategy }),
        new NextApp({ dir: '.' }),
    ],
}
