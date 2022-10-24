import {
    Redirect,
} from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../../context/AuthContext';


function PrivateRoutes({ children }) {

    return (
        <div>
            {!localStorage.getItem('token') ? <Redirect to='/login' /> : children}
        </div>
    )
}

export default PrivateRoutes
