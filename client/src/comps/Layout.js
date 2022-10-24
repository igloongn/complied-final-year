import React from 'react'
import CustomAppBar, { SearchAppBard } from './CustomNavbar'

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <CustomAppBar />
                {/* <SearchAppBard /> */}
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
