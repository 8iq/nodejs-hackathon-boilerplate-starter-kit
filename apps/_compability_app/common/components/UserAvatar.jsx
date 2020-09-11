/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Avatar } from "antd"
import React from "react";
import { useIntl } from "react-intl";
import {useAuth} from "@core/next/auth";

export const UserAvatar = ({size = "small", ...props}) => {
    const auth = useAuth();
    const intl = useIntl();
    const avatarUrl = (auth.user && auth.user.avatar && auth.user.avatar.publicUrl)
        ? auth.user.avatar.publicUrl
        : 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';

    return (
        <Avatar
            {...props}
            size={size}
            src={avatarUrl}
            alt={intl.formatMessage({id: 'Avatar'})}
            className="avatar"
        />
    )
};
