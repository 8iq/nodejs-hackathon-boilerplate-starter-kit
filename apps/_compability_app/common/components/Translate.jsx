import * as React from "react"
import { useIntl } from '@core/next/intl';

export function Translate(props) {
    const intl = useIntl()

    return (
        <React.Fragment>
            {intl.formatMessage(props)}
        </React.Fragment>
    )
}
