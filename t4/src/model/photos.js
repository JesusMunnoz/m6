const { Schema, model } = require("mongoose");

const PhotosSchema = new Schema(
    {
        nombreUsuario: String,
        url: String,
        titulo: String,
        comentario: String

    }
)

module.exports = mongoose = { "Photo", PhotosSchema, "photo" };
