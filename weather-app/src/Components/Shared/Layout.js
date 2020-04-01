import React from 'react'
import Navbar from './navbar'

export default function Layout({children}) {
    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                {children}
            </div>
        </>
    )
}
