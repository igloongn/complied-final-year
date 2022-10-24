const express = require('express')
const app = express()
const News = require('../models/news')

const getAllNews = async (req, res, next) => {
    // try {
    //     const news = await News.find().sort({ _id: -1 })
    //     return res.status(200).json({
    //         message: 'Get all the News Here',
    //         data: news
    //     })

    // } catch (err) {
    //     return res.status(200).json({
    //         message: 'GET request failed',
    //         error: err
    //     })
    // }

    
    // const { page =1, limit = 3 } = req.query;
    const { page, limit = 5 } = req.query;

    try {
        // execute query with page and limit values
        const data = await News.find()
            .sort({ _id: -1 })
            .limit(limit * 1)
            .skip((Number(page) - 1) * limit)
            // .select("title")
            .exec();

        // get total documents in the Posts collection 
        const count = await News.countDocuments();

        // return response with posts, total pages, and current page
        res.json({
            count,
            length: data.length,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
            data,
        });
    } catch (err) {
        console.error(err.message);
        return res.json({
            error: err,
            message: err.message
        });
    }

}

const postAllNews = async (req, res, next) => {
    console.log(req.body)
    const news = new News(req.body)
    try {
        const result = await news.save()
        return res.status(200).json({
            message: 'News Created Successfully',
            data: result
        })
    } catch (err) {
        return res.status(400).json({
            message: 'News Failed',
            error: err
        })

    }


}

const getSingleNews = async (req, res, next) => {
    News.findById(req.params.newsId)
        .then(singleNews => {
            console.log('singleNews')
            if (singleNews) {
                return res.status(200).json({
                    message: 'Successful',
                    singleNews
                })
            } else {
                return res.status(404).json({
                    message: 'Wrong ID',
                })
            }
        })
        .catch(err => {
            return res.status(404).json({
                message: 'Failed',
                errorMessage: err.message,
                err,
            })
        })

}
const searchController = async (req, res, next) => {
    let searchQuery = req.params.searchQuery
    searchQuery = searchQuery.substr(1,)
    console.log(searchQuery)


    try {
        const news = await News.find()

        // const filtered = news.filter(data => data.title.includes(searchQuery) || data.title.startsWith(searchQuery) )
        const filtered = news.filter(data => data.title.match(searchQuery))
        // console.log(filtered);

        return res.status(200).json({
            message: 'Get all the Search Here',
            length: filtered.length,
            filtered: filtered,
        })

    } catch (err) {
        return res.status(200).json({
            message: 'GET request failed',
            error: err
        })
    }
}


const Pagination = async (req, res, next) => {
    // const { page =1, limit = 3 } = req.query;
    const { page, limit = 2 } = req.query;

    try {
        // execute query with page and limit values
        const data = await News.find()
            .sort({ _id: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select("title")
            .exec();

        // get total documents in the Posts collection 
        const count = await News.countDocuments();

        // return response with posts, total pages, and current page
        res.json({
            count,
            length: data.length,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            data,
        });
    } catch (err) {
        console.error(err.message);
        return res.json({
            error: err,
            message: err.message
        });
    }

}


module.exports = {
    getAllNews,
    postAllNews,
    getSingleNews,


    searchController,



    Pagination,
}



