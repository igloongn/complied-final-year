const express= require('express')
const { getAllNews, postAllNews, getSingleNews } = require('../controller/news')
const newsRouter = express.Router()



newsRouter.route('/').get(getAllNews).post(postAllNews)
newsRouter.route('/:newsId').get(getSingleNews)



module.exports = newsRouter


