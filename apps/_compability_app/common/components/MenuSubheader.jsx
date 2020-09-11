import * as React from "react";
import styled from "@emotion/styled";
import LogoImage from "../../assets/logo_v2.png";
const Container = styled.div`
    margin: auto;
    max-width: 1024px;
    padding: 8px 0;
`;

const Logo = styled.div`
    margin-left: 12px;
    width: 130px;
    height: 14px;
    background-image: url(${LogoImage});
    margin-right: auto;
    background-size: contain;
    background-repeat: no-repeat;
`;

export function MenuSubHeader() {
    return (
        <Container>
            <Logo/>
        </Container>
    )
}
