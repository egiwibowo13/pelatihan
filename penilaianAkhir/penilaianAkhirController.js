PenilaianAkhir = require('./penilaianAkhirModel.js');

module.exports.getPenilaianAkhir = function(callback,limit){
    PenilaianAkhir.find(callback).limit(limit);
}

module.exports.getPenilaianAkhirById = function(_id,callback){
    PenilaianAkhir.findById(_id,callback);
}

module.exports.createPenilaianAkhir = function(penilaianAkhir,callback){
    PenilaianAkhir.create(penilaianAkhir,callback);
}

module.exports.deletePenilaianAkhir = function(id,callback){
    PenilaianAkhir.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianAkhir = function(id,penilaianAkhir,callback){
    PenilaianAkhir.findByIdAndUpdate(id,penilaianAkhir,callback);
}