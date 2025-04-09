import React from 'react'
import { Outlet } from 'react-router'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <main>
      <Header/>
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </main>
  )
}

export default Layout