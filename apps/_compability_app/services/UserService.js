import { injectable } from "inversify";
import { globalApolloClient } from "@core/next/apollo";
import { USER_QUERY } from "@core/next/auth";

class User {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.avatar = user.avatar?.publicUrl;
        this.isAdmin = user.isAdmin;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getAvatar() {
        return this.avatar;
    }

    isAdmin() {
        return this.isAdmin;
    }
}

@injectable()
export class UserService {
    init() {
        this.user_subscription = globalApolloClient.watchQuery({
            query: USER_QUERY
        }).subscribe((result) => {
            if (result.data?.authenticatedUser) {
                this.current_user = new User(result.data.authenticatedUser);
            }
        });
    }

    getCurrentUser() {
        return this.current_user;
    }

    current_user = null;
    user_subscription = null
}
