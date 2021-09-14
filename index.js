const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Express running')
})

app.use('/api/karyawan', require('./routes/KaryawanRoute'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})