const express = require('express')
const connection = require('./helper/Koneksi.js')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express running')
})

app.get('/get_karyawan', (req, res) => {
    connection.query('SELECT * from tbl_karyawan', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
    // res.send('ini nodemon')
})

// api add
app.post('/add_karyawan', (req, res) => {
    const data = req.body
    // console.log(data)
    connection.query(`INSERT INTO tbl_karyawan (nama_karyawan, phone_karyawan, email_karyawan) VALUES ('${data.nama_karyawan}', '${data.phone_karyawan}', '${data.email_karyawan}')`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

// api delete
app.post('/delete_karyawan/:id', (req, res) => {
    const { id } = req.params
    // console.log(id)
    connection.query(`DELETE FROM tbl_karyawan WHERE id_karyawan = '${id}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

// api update
app.post('/update_karyawan', (req, res) => {
    const data = req.body
    // console.log(data)
    connection.query(`UPDATE tbl_karyawan SET nama_karyawan='${data.nama_karyawan}', phone_karyawan='${data.phone_karyawan}', email_karyawan='${data.email_karyawan}' WHERE id_karyawan = '${data.id_karyawan}'  `,
        function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})