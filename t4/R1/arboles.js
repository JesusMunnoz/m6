const mongoose = require ("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/codenotchT2') 

let PhotosSchema = new mongoose.Schema({
    nombreUsuario: String,
    url: String,
    titulo: String,
    comentario: String
});

const PhotoModel = mongoose.model("PhotoModel", PhotosSchema);

let photo1 = new PhotoModel(
    {
        nombreUsuario: "Pepe", 
        url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg", 
        titulo: "Tractor", 
        comentario: "Tractor verde arando tierras secas."
    }
)

let photo2 = new PhotoModel(
    {
        nombreUsuario: "Pepito", 
        url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg", 
        titulo: "Vehículo", 
        comentario: "Tractor verde arando tierras castellanas."
    }
)

let photo3 = new PhotoModel(
    {
        nombreUsuario: "Pedro", 
        url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg", 
        titulo: "Formas geométricas", 
        comentario: "Tractor verde arando tierras manchegas."
    }
)

photo1.save()
.then(() => {
    console.log("photo 1 guardada");
    return photo2.save();
})
.then(() => {
    console.log("photo 2 guardada");
    return photo3.save();
})
.then(() => {
    console.log("photo 3 guardada");
    return PhotoModel.updateOne({ titulo: "Tractor" }, { comentario: "Actualizado" });
})
.then(() => {
    console.log("photo 1 actualizada");
    return PhotoModel.updateOne({ titulo: "Vehículo" }, { comentario: "Actualizado" });
})
.then(() => {
    console.log("photo 2 actualizada");
    return PhotoModel.updateOne({ titulo: "Formas geométricas" }, { comentario: "Actualizado" });
})
.then(() => {
    console.log("photo 3 actualizada");
})
.catch((error) => {
    console.log(error);
});

module.exports = mongoose.model = { PhotoModel };