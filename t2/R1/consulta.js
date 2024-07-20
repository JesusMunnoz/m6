const mongoose = require("mongoose");
const { PhotoModel } = require("./photoMDB");

mongoose.connect('mongodb://localhost:27017/codenotchT2', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

async function guardar(data) {
    try {
        let document = new PhotoModel(data);
        let res = await document.save();
        console.log("Documento guardado correctamente");
        console.log(res);
    } catch (error) {
        console.log("Error al escribir el documento");
        console.log(error);
    }
    mongoose.disconnect();
}

// obtener todas las fotos de un usuario
async function damePhotos(nombreUsuario) {
    try {
        let items = await PhotoModel.find({ "nombreUsuario": nombreUsuario });
        console.log(items);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al obtener las fotos");
        console.log(error);
        mongoose.disconnect();
    }
}

// modificar la descripción de una foto dado su título
async function actualizarComent(titulo, comentario) {
    try {
        let item = await PhotoModel.updateOne({ "titulo": titulo }, { "comentario": comentario });
        console.log(item);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error de actualización");
        console.log(error);
        mongoose.disconnect();
    }
}

// eliminar una foto dado el usuario y el título
async function borrarUna(nombreUsuario, titulo) {
    try {
        let item = await PhotoModel.deleteOne({ "$and": [{ "nombreUsuario": nombreUsuario }, { "titulo": titulo }] });
        console.log("Se borró la foto");
        console.log(item);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al eliminar la foto");
        console.log(error);
        mongoose.disconnect();
    }
}

// eliminar todas las fotos de un usuario
async function borrarTodas(nombreUsuario) {
    try {
        let item = await PhotoModel.deleteMany({ "nombreUsuario": nombreUsuario });
        console.log("Se borraron todas las fotos");
        console.log(item);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al eliminar todas las fotos");
        console.log(error);
        mongoose.disconnect();
    }
}


// foto que se sube
let data = {
    nombreUsuario: "Pepe", 
    url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg", 
    titulo: "Campos verdes", 
    comentario: "arboles amarillos y mariposas volando."
};


// Descomentar para que funcinne

guardar(data);
//damePhotos("Pepe");
//actualizarComent("Vehículo", "esto esta muerto");
//borrarUna("Pedro", "Formas geométricas");
//borrarTodas("Pepe");

//-----------------------------------------------------



/*
// Subida de fotos
let data = {
    nombreUsuario: "Pepe", 
    url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg", 
    titulo: "Campos verdes", 
    comentario: "Parece un montón de cesped bien cortado."
};

let document = new PhotoModel(data); 

document.save()
.then(function(res){
    console.log("Documento guardado correctamente desde promesa"); 
    console.log(res) 
    mongoose.disconnect();
})
.catch(function(){
    console.log("Error al escribir el documento")
})

PhotoModel.create(data)
.then(function(res){
    console.log("Documento guardado correctamente")
    console.log(res)
    mongoose.disconnect();
})
.catch(function(){
    console.log("Error al escribir el documento")
})

*/

// Dado un usuario obtener todas sus fotos.
/*
PhotoModel.find({"nombreUsuario":"Pepe"})
.then (function(items){
    console.log(items);
    mongoose.disconnect();
})
.catch(function(){
    console.log("error")
})
*/

// dado titulo y descripcion, modificar descripcion 

/*
PhotoModel.updateOne({"titulo": "Vehículo"}, {"comentario": "en verdes praderas me hace reposar"})
.then(function(item){
    console.log(item);
    mongoose.disconnect();
})
.catch(function(){
    console.log("error")
})
*/

//dado usuario y titulo eliminar foto
/*
PhotoModel.deleteOne({"$and": [{"nombreUsuario": "Pedro"}, {"titulo": "Formas geométricas"}]})
.then(function(item){
    console.log("borrado correctamente");
    console.log(item);
    mongoose.disconnect();
})
.catch(function(){
    console.log("error")
})
*/

// dado usuario eliminar todas sus fotos

/*
PhotoModel.deleteMany({"nombreUsuario": "Pepe"})
.then(function(item){
    console.log("borrado correctamente");
    console.log(item);
    mongoose.disconnect();
})
.catch(function(){
    console.log("error")
})
*/