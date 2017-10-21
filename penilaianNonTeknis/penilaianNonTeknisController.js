PenilaianNonTeknis = require('./penilaianNonTeknisModel.js');

module.exports.getPenilaianNonTeknis = function(callback,limit){
    PenilaianNonTeknis.find(callback).limit(limit);
}

module.exports.getPenilaianNonTeknisById = function(_id,callback){
    PenilaianNonTeknis.findById(_id,callback);
}

module.exports.createPenilaianNonTeknis = function(penilaianNonTeknis,callback){
    PenilaianNonTeknis.create(penilaianTeknis,callback);
}

module.exports.deletePenilaianNonTeknis = function(id,callback){
    PenilaianNonTeknis.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianNonTeknis = function(id,penilaianNonTeknis,callback){
    PenilaianNonTeknis.findByIdAndUpdate(id,penilaianNonTeknis,callback);
}