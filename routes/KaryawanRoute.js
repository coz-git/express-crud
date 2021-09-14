const { Router } = require('express')
const connection = require('../helper/Koneksi.js')
const router = Router()

router.get('/get_karyawan', (req, res) => {
    connection.query('SELECT * from tbl_karyawan', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
    // res.send('ini nodemon')
})

// api add
router.post('/add_karyawan', (req, res) => {
    const data = req.body
    // console.log(data)
    connection.query(`INSERT INTO tbl_karyawan (nama_karyawan, phone_karyawan, email_karyawan) VALUES ('${data.nama_karyawan}', '${data.phone_karyawan}', '${data.email_karyawan}')`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

// api delete
router.post('/delete_karyawan/:id', (req, res) => {
    const { id } = req.params
    // console.log(id)
    connection.query(`DELETE FROM tbl_karyawan WHERE id_karyawan = '${id}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

// api update
router.post('/update_karyawan', (req, res) => {
    const data = req.body
    // console.log(data)
    connection.query(`UPDATE tbl_karyawan SET nama_karyawan='${data.nama_karyawan}', phone_karyawan='${data.phone_karyawan}', email_karyawan='${data.email_karyawan}' WHERE id_karyawan = '${data.id_karyawan}'  `,
        function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        });
})

module.exports = router