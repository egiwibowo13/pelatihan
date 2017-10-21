let mong = require('mongoose');

let penilaianAkhir = mong.Schema({
    NoSuratTugas:String,
	KdPegawai: String,
	KdPeserta:String,
	KdPegawaiPenilai:String,
	Nilai1:Number,
    Nilai2:Number,
    CreatedBy:String,
    CreatedDate:String,
    ModifiedBy:String,
    ModifiedDate:String
});

let PenilaianAkhir = module.exports = mong.model("PenilaianAkhir", penilaianAkhir, "PenilaianAkhir");