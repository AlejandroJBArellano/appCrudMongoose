const express = require("express"), mongoose = require("mongoose"), morgan = require("morgan"), path = require("path"), router = require("./routes/index.js"), app = express();
require("./database")
//settings
app.set("port", process.env.PORT || 5000)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//middleweares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))

//routes
app.use(router)

//errores

//static files
app.use(express.static(path.join(__dirname, "public")))

//start the server
app.listen(app.get("port"), _=>console.log(`server on port ${app.get("port")}`));