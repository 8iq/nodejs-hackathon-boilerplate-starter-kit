import '@refinedev/antd/dist/reset.css'
import { Refine as BaseRefine, RefineProps as BaseRefineProps } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerProvider from '@refinedev/nextjs-router'
import React from 'react'
import { ThemeProvider, AntdRegistry } from './general'

export { NavigateToResource } from '@refinedev/nextjs-router'
export { AuthPage } from '@refinedev/antd'

export interface RefineProps extends BaseRefineProps {
  theme?: 'dark' | 'light'
}

// https://github.com/refinedev/refine/blob/master/examples/with-nextjs/src/app/layout.tsx#L36
// https://ant.design/docs/react/use-with-next#using-app-router
export function ThemedRefine({ theme, children, ...props }: RefineProps): React.JSX.Element {
  return (
    // (client only) https://github.com/ant-design/nextjs-registry/blob/main/src/AntdRegistry.tsx
    <AntdRegistry>
      <RefineKbarProvider>
        <ThemeProvider defaultMode={theme}>
          {/*  <DevtoolsProvider>*/}
          <BaseRefine
            routerProvider={routerProvider}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
            }}
            {...props}
          >
            {children}
            <RefineKbar />
          </BaseRefine>
          {/*  </DevtoolsProvider>*/}
        </ThemeProvider>
      </RefineKbarProvider>
    </AntdRegistry>
  )
}
