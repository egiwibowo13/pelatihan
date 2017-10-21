let ex = require('express');
let route = ex.Router();
let penilaianNonTeknisController = require('./penilaianNonTeknisController.js')

route.get('/penilaianNonTeknis', function (req, res) {
    penilaianNonTeknisController.getPenilaianNonTeknis(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penilaianNonTeknis/:_id', function (req, res) {
    let id = req.params._id;
    penilaianNonTeknisController.getPenilaianNonTeknisById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penilaianNonTeknis', function (req, res) {
    let akses = req.body;
    penilaianNonTeknisController.createPenilaianNonTeknis(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penilaianNonTeknis/:_id', function (req, res) {

    penilaianNonTeknisController.deletePenilaianNonTeknis(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penilaianNonTeknis/:_id', function (req, res) {
    let penilaiannonteknis = req.body;
    penilaianNonTeknisController.updatePenilaianNonTeknis(req.params._id,penilaiannonteknis, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;