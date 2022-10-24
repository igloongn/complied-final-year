import React from 'react'
import { useHistory } from 'react-router-dom'
const PageNotFound = () => {
    const history = useHistory()
    setTimeout(() => {
        history.go(-1)
    }, 4000);
}

export default PageNotFound