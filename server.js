const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const productRouter = require("./src/routes/productRouter")
const userRouter = require("./src/routes/userRouter")

const app = express()
const port = process.env.PORT;
const db_link = process.env.DB_CONNECT_LINK
const db_local = process.env.DB_LOCAL

mongoose.connect(db_link)
.then(console.log("DB connected successfully"))
.catch(err => {
    console.log("error: ",err)
})

app.use(express.json)
app.get("/",(req,res) =>{
    res.send("API is live")
})
app.use("/user", userRouter)
app.use("/products", productRouter)

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})