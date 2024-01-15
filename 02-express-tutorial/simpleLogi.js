
const simpleLogic = (req,res,next) =>{
    const method  = req.method
    const url = req.url
    const currentTime = new Date().getFullYear()
    console.log(method, url, currentTime)
    next()
}

module.exports = simpleLogic
