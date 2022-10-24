import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext()
export default AuthContext



export const AuthProvider = ({ children }) => {

    const localauth = localStorage.getItem('token')

    const [Token, settoken] = useState(() => localauth ? localauth : null)
    const [user, setuser] = useState(() => localauth ? jwt_decode(localauth) : null)

    const [loading, setloading] = useState(true)
    const [navItems, setNavItems] = useState(localStorage.getItem('token') 
    ? 
    [
        // {
        //     id: 1,
        //     name: 'Home',
        //     url: '/'
        // },
        // {
        //     id: 2,
        //     name: 'News',
        //     url: '/news'
        // },
        {
            id: 3,
            name: 'Dashboard',
            url: '/dashboard'
        },  
        {
            id: 3,
            name: 'Logout',
            url: '/logout'
        },
    ]
    :
    [
        {
            id: 1,
            name: 'Home',
            url: '/'
        },
        {
            id: 2,
            name: 'News',
            url: '/news'
        },
        {
            id: 3,
            name: 'Admin',
            url: '/login'
        },
    ]);


    let contextData = {
        // Functions
        setNavItems,


        // Variables
        user: user,
        Token,

        navItems,
    }


    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}