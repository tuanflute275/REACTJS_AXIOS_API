import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function AdminLayout({ child }) {
    return (
        <>
            <Header />
            {child}
            <Footer />
        </>
    )
}

export default AdminLayout