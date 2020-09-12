/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Layout } from 'antd'

import { Navigation } from '../components'
import {useAuth} from "@core/next/auth";
import {MenuSubHeader} from "../components/MenuSubheader";

const { Header, Content } = Layout;

const layoutCss = css`
    min-height: 100vh;
    background: radial-gradient(#CECECE, #fff);
`;

const topMenuCss = css`
    height: auto;
    background: #156E8F;
    padding: 0;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    z-index: 2;
    min-width: 100%;
    color: #fff;
`;

const mainContentCss = css`
    display:flex;
    flex-direction:column;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
    max-width: 1024px;
    background: none;
    z-index: 2;
    border-radius: 2px;
`;

export function BaseLayout(props) {
    const auth = useAuth();

    return (
        <Layout css={layoutCss} as="section">
            <Header css={topMenuCss} style={props.topMenuStyle}>
                {/*TODO(ddanev): add auth header/menu*/}
                <MenuSubHeader/>
                {auth.isAuthenticated ? <Navigation/> : null}
            </Header>
            <Content as="div" style={props.mainContentWrapperStyle}>
                <div css={mainContentCss} as="main" style={props.mainContentStyle}>
                    {props.children}
                </div>
            </Content>
        </Layout>
    )
}
