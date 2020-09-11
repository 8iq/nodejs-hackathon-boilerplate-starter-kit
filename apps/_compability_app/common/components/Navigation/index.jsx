/** @jsx jsx */
import * as React from "react";
import { withRouter } from 'next/router'
import {jsx} from '@emotion/core'
import {Dropdown, Menu, Spin} from 'antd'
import {useIntl} from 'react-intl'
import {TeamOutlined, HomeOutlined, LogoutOutlined, MessageOutlined} from '@ant-design/icons'
import {useAuth} from '@core/next/auth'
import Router from "next/router";

import {CustomAvatar} from "../CustomAvatar";
import {customAvatar, headerRightWrapper, addition_menu_style} from "./styles"
import {IconContainer, StyledMenuItemWrapper} from "./components";

const UserInfo = () => {
    // TODO(ddanev):it seems like we have incorrectly implemented dropdown,
    //  needs to rework this and drop the menu usage into dropdown overlay
    const auth = useAuth();
    const intl = useIntl();

    const menu = (
        <Menu>
            <Menu.Item key="signout" onClick={auth.signout}>
                <LogoutOutlined/>
                {intl.formatMessage({id: 'SignOut'})}
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            {/*FIXME(ddanev): dropdown doesn't work without this div wrapper*/}
            <div css={customAvatar}>
                <CustomAvatar auth={auth}/>
            </div>
        </Dropdown>
    )
};


export class AppNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.router.pathname
        }
    }

    static getDerivedStateFromProps(props) {
        return {
            active: props.router.pathname
        }
    }

    render() {
        if (this.props.loading) {
            return (
                <div css={headerRightWrapper}>
                    <Spin size="small" style={{ marginLeft: 16, marginRight: 16 }}/>
                </div>
            )
        }

        return (
            <div css={headerRightWrapper}>
                <Menu
                    onClick={this.handleMenuItemClick}
                    selectedKeys={[this.state.active]}
                    mode="horizontal"
                    style={addition_menu_style}
                >
                    {this.renderMenuItems()}
                </Menu>
                <StyledMenuItemWrapper style={{marginLeft: "auto"}}>
                    <UserInfo/>
                </StyledMenuItemWrapper>

            </div>
        )
    }

    handleMenuItemClick = (e) => {
        this.setState({ active: e.key }, () => {
            const route_config = this.routes_config.find(({key}) => key === e.key);

            if (!route_config) {
                return;
            }

            Router.push(route_config.route);
        });
    };

    renderMenuItems() {
        return this.routes_config.map((menuItem) => {
            const {key} = menuItem;

            return (
                <Menu.Item
                    style={{
                        borderBottom: "none",
                        margin: 0,
                    }}
                    key={key}
                    icon={menuItem.icon(key === this.state.active)}
                />
            )
        })
    }

    icon_style = {
        fontSize: "22px",
        color: "#fff",
        marginRight: 0,
    };

    routes_config = [
        {
            key: "/",
            title: "Home",
            icon: (active) => (
                <StyledMenuItemWrapper>
                    <IconContainer active={active}>
                        <HomeOutlined style={this.icon_style}/>
                    </IconContainer>
                </StyledMenuItemWrapper>
            ),
            route: "/",
        },
        {
            key: "/matches",
            title: "Matches",
            icon: (active) => (
                <StyledMenuItemWrapper>
                    <IconContainer active={active}>
                        <TeamOutlined style={this.icon_style}/>
                    </IconContainer>
                </StyledMenuItemWrapper>
            ),
            route: "/matches",
        },
        {
            key: "/messages",
            title: "Messages",
            icon: (active) => (
                <StyledMenuItemWrapper>
                    <IconContainer active={active}>
                        <MessageOutlined style={this.icon_style}/>
                    </IconContainer>
                </StyledMenuItemWrapper>
            ),
            route: "/messages",
        },
    ];
}

export const Navigation = withRouter(AppNavigation);
