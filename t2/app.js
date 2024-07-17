const mongoose = require('mongoose');
const { PhotoModel } = require ('./arboles')
const dbmong = 'mongodb://localhost:27017/codenotchT2';

mongoose.connect(dbmong, {useNewUrlParser: false, useUnifiedTopology: false} )

let user = new PhotoModel({
    nombreUsuario: "Pepe",
    url: "https://www.deere.es/assets/images/region-2/our-company/news/press-releases/es/Tractor_autonomo.jpg",
    titulo: "Tractor",
    comentario: "Tractor verde arando tierras."
});

user.save()

.then( resp =>  {
    console.log('doc guardado correctamente');
    console.log(resp);

})

.catch(err => {
    console.error("ERROR: " + err);
});