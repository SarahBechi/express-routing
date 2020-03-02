
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.use(date = (req, res, next) => {
    let working_hour = new Date().getHours();
    if ((working_hour > 8) && (working_hour < 17)) {
        res.sendFile(__dirname + '/public/home.html')
        console.log(working_hour)
        next()
    }
    else {
        res.sendFile(__dirname + '/public/closed-office.html');



    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
}
)
var port = process.env.PORT || 2000
app.listen(port, (err) => {
    if (err) console.log("oops !! serveur is not runnig")
    else console.log(`server lisining to port : ${port}`)
})


