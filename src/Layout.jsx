import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/Header/TopBar'

function Layout(){
    return(
        <>
        <TopBar />
        <Header />
            <Outlet/>
        <Footer />
        </>
    )
}

export default Layout