import * as React from "react";
import { Typography } from 'antd'

import { CustomLink, Translate, SplashProfileInfo } from '../common/components'
import { AuthLayout  } from "../common/containers";

function HomePage () {
    return (
        <AuthLayout>
            <SplashProfileInfo/>
            <Typography.Title>
                <Translate id={"pages.index.title"}/>
            </Typography.Title>
            <CustomLink path="/tests/disc">
                <Translate id={"pages.index.apply_test"}/>
            </CustomLink>
        </AuthLayout>
    )
}

export default HomePage
