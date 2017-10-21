let mong = require('mongoose');

let penilaianNonTeknis = mong.Schema({
    KdPegawai: String,
	KdPeserta:String,
	Minggu:String,
	TipePenilaian:String,
	Nilai:Number,
	CreatedBy:String,
    CreatedDate:String,
    ModifiedBy:String,
    ModifiedDate:String
});

let PenilaianNonTeknis = module.exports = mong.model("PenilaianNonTeknis", penilaianNonTeknis, "PenilaianNonTeknis");