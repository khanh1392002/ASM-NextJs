import React from 'react'
import { layoutProps } from '../../model/layout'
import Footer from '../Footer'
import Header from '../Header'



const Layout = ({ children }: layoutProps) => {
    return (
        <>
        <Header></Header>
            {children}
        <Footer></Footer>
        </>
    )
}

export default Layout