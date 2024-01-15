
const authorize = (req,res) =>{
    const {id, name, next} = req.query
    if (name === "bujang") {
        next()
        return res.send("<h1>Authorized</h1>")
    }
    return res.send("<h1>Unauthorized</h1>")
    next()
}
module.exports = authorize