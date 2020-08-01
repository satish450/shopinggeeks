const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('template'));

app.get('/', (req, res) => res.sendFile(__dirname + '/template/index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))