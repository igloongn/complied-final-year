
const getTest = (req, res, next) => {
    
    return res.status(200).json({
        message: 'Protected Route Test', 
        test: req.userData

    })
}




module.exports ={
    getTest
}





