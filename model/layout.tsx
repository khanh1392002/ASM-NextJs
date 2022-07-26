import { NextPage } from "next"
import { ReactElement } from "react"
import { AppProps } from "next/app"

export type layoutProps = {
    children: React.ReactNode
}
export type NextPageWithLayout = NextPage & {
    Layout?: (page: layoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}