const Express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ContactController = require("./Routes/Contact")
const UserController = require("./Routes/User")
require("dotenv").config()

const app = Express()
app.use(Express.json({limit:"30mb",extended:true}))
app.use(cors())

//mongodb+srv://yash:yash@app.fmxq6.mongodb.net/ContantManager
const Connection_Url = "mongodb+srv://krishna:spkrishna@krishnacluster.xjap0dj.mongodb.net/contactmanager?retryWrites=true&w=majority"
const Port = process.env.PORT || 5003;

mongoose.connect(Connection_Url).then(()=>{
    app.listen(Port,(err)=>{
        if(!err){
            console.log(`The Server running at ${Port} And Db Has Connected`)
        }
    })
}).catch((err)=>{
    console.log(err)
})
//controlling other pages
app.use("/user",UserController)
app.use("/contact",ContactController)