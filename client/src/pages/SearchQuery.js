import React, { useEffect, useState } from 'react'
import { NewsCard } from '../comps/NewsCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SearchQuery = () => {
    const [payload, setPayload] = useState({
        isLoading: true,
        data: {}
    })
    const { searchQuery } = useParams()

    useEffect(() => {
        const url = 'http://localhost:1234/search/' + searchQuery

        axios.get(url)
            .then((res) => {
                setPayload({
                    data: res.data.filtered,
                    isLoading: false
                    // isLoading: true
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {payload.isLoading
                ?
                <h2 style={{ marginLeft: 100 }}>Loading.....</h2>
                :
                payload.data.length === 0
                    ?
                    <h2 style={{ marginLeft: 100 }}>No Search Result</h2>
                    :
                    payload.data.map(item => <NewsCard data={item} />)

            }
        </div>
    )
}



export default SearchQuery