PenilaianTeknis = require('./penilaianTeknisModel.js');

module.exports.getPenilaianTeknis = function(callback,limit){
    PenilaianTeknis.find(callback).limit(limit);
}

module.exports.getPenilaianTeknisById = function(_id,callback){
    PenilaianTeknis.findById(_id,callback);
}

module.exports.createPenilaianTeknis = function(penilaianTeknis,callback){
    PenilaianTeknis.create(penilaianTeknis,callback);
}

module.exports.deletePenilaianTeknis = function(id,callback){
    PenilaianTeknis.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianTeknis = function(id,penilaianTeknis,callback){
    PenilaianTeknis.findByIdAndUpdate(id,penilaianTeknis,callback);
}