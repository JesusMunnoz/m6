const mongoose = require("mongoose");
const { PhotoModel } = require("./photoMDB");

mongoose.connect('mongodb://localhost:27017/codenotchT2', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

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