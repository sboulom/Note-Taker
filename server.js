var express = require("express")
var app = express()

var PORT = process.env.PORT || 8000

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //middleware parsing

var apiRoutes = require("./routes/apiRoutes")
var htmlRoutes = require("./routes/htmlRoutes")

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function () {
    console.log("App is listening on http://localhost:" + PORT)
})
