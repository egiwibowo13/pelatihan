let ex = require('express');
let route = ex.Router();
let penilaianAkhirController = require('./penilaianAkhirController.js')

route.get('/penilaianAkhir', function (req, res) {
    penilaianAkhirController.getPenilaianAkhir(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penilaianAkhir/:_id', function (req, res) {
    let id = req.params._id;
    penilaianAkhirController.getPenilaianAkhirById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penilaianAkhir', function (req, res) {
    let akses = req.body;
    penilaianAkhirController.createPenilaianAkhir(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penilaianAkhir/:_id', function (req, res) {

    penilaianAkhirController.deletePenilaianAkhir(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penilaianAkhir/:_id', function (req, res) {
    let penilaianakhir = req.body;
    penilaianAkhirController.updatePenilaianAkhir(req.params._id,penilaianakhir, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;