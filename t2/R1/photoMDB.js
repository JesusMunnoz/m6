const mongoose = require ("mongoose");

let PhotosSchema = new mongoose.Schema({
    nombreUsuario: String,
    url: String,
    titulo: String,
    comentario: String
});

const PhotoModel = mongoose.model("PhotoModel", PhotosSchema);

module.exports = mongoose.model = { PhotoModel };