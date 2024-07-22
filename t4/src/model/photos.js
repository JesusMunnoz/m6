const {Schema, model} = require("mongoose");

const PhotosSchema = new Schema(
    {
        nombreUsuario: String,
        url: String,
        titulo: String,
        comentario: String

    }
)

module.exports = model("Photos", PhotosSchema, "photos");

/*
{
    "nombreUsuario": "Peponazo",
    "url": "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg",
    "titulo": "Tractor Amarillo es lo que se lleva ahora",
    "comentario": "dfgdgdfgd"
}
*/