let ex = require('express');
let route = ex.Router();
let penilaianTeknisController = require('./penilaianTeknisController.js')

route.get('/penilaianTeknis', function (req, res) {
    penilaianTeknisController.getPenilaianTeknis(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penilaianTeknis/:_id', function (req, res) {
    let id = req.params._id;
    penilaianTeknisController.getPenilaianTeknisById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penilaianTeknis', function (req, res) {
    let akses = req.body;
    penilaianTeknisController.createPenilaianTeknis(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penilaianTeknis/:_id', function (req, res) {

    penilaianTeknisController.deletePenilaianTeknis(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penilaianTeknis/:_id', function (req, res) {
    let penilaianteknis = req.body;
    penilaianTeknisController.updatePenilaianTeknis(req.params._id,penilaianteknis, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;