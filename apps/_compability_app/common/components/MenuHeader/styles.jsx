import {css} from "@emotion/core";

export const addition_menu_style = {
    background: "#156E8F",
    borderBottom: "none",
};

export const headerRightWrapper = css`
    display: flex;
    flex-direction: row;
    justify_content: space-between;
    max-width: 1024px;
    margin:auto;
    height: 100%;
    overflow: hidden;
`;

export const headerItem = css`
    display: inline-block;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s;
    > i {
        vertical-align: middle;
    }
    .avatar {
        margin-right: 8px;
    }
`;

export const customAvatar = css`
    padding: 0 16px;
`;

