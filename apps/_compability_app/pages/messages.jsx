import * as React from "react";
import {AuthLayout, BaseLayout} from "../common/containers";
import { Chat } from "../modules/chat";

function MessagesPages () {
    return (
        <AuthLayout>
            <Chat/>
        </AuthLayout>
    )
}

function CustomContainer (props) {
    const wrapperStyle = {
        display: "flex",
    };

    const contentStyle = {
        flex: 1
    };

    return (
        <BaseLayout
            {...props}
            mainContentWrapperStyle={wrapperStyle}
            mainContentStyle={contentStyle}
        />)
}

MessagesPages.container = CustomContainer;

export default MessagesPages
