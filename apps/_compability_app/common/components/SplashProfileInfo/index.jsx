import * as React from "react";
import styled from "@emotion/styled";
import Background from "../../../assets/bg.jpg";
import {useAuth} from "@core/next/auth";
import {UserAvatar} from "../UserAvatar";
import {Typography} from "antd";
import {TeamOutlined, FileTextOutlined, MessageOutlined, DingtalkOutlined} from '@ant-design/icons'
import { useRouter } from 'next/router'
const {Title} = Typography;

const Container = styled.div`
    height: 340px;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    z-index: 1;
    align-items: center;
`;

// TODO: should fetch this from user settings;
// user need to be able to upload profile bg instead of avatar;
const BackgroundHolder = styled.div`
    position: absolute;
    margin-top: -24px;
    z-index: 0;
    left: 0;
    right: 0;    
    height: 340px;
    background-size: 100% 100%;
    background-image: url(${Background});
`;

const ActionsContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ActionContainer = styled.div`
    width: 62px;
    height: 62px;
    display: flex;
    border-radius: 50%;
    border: 1px solid white;
    margin: 0 24px;
    cursor: pointer;
    
    &:hover {
          background-color: rgba(255, 255, 255, 0.15);
    }
`;

export function SplashProfileInfo() {
    const auth = useAuth();
    const router = useRouter();

    return (
        <>
            <BackgroundHolder/>
            <Container>
                <UserAvatar size="large" style={{width: "140px", height: "140px", border: "2px solid white"}}/>
                <Title style={{color: "#fff", fontWeight: 500, paddingTop: "4px"}} level={2}>Hello {auth.user.name}</Title>
                <ActionsContainer>
                    {
                        SPLASH_SCREEN_ACTIONS_CONFIG.map((action) => {
                            const {key, icon, route} = action;

                            return (
                                <ActionContainer key={key} onClick={() => {
                                    router.push(route)
                                }}>
                                    {icon()}
                                </ActionContainer>
                            )
                        })
                    }
                </ActionsContainer>
            </Container>
        </>
    )
}

const ICON_STYLE = {
    fontSize: "30px",
    color: "#fff",
    marginRight: 0,
    margin: "auto"
};

const SPLASH_SCREEN_ACTIONS_CONFIG = [
    {
        key: "matches",
        title: "Matches",
        icon: () => (
            <TeamOutlined style={ICON_STYLE}/>
        ),
        route: "/matches",
    },
    {
        key: "messages",
        title: "Messages",
        icon: () => (
            <MessageOutlined style={ICON_STYLE}/>
        ),
        route: "/messages",
    },
    {
        key: "test",
        title: "Test",
        icon: () => (
            <FileTextOutlined  style={ICON_STYLE}/>
        ),
        route: "/tests/disc",
    },
    {
        key: "anythingElse",
        title: "anythingElse",
        icon: () => (
            <DingtalkOutlined  style={ICON_STYLE}/>
        ),
        route: "/",
    },
]
