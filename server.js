const express = require('express')
const app = express()
const port = 4444

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})