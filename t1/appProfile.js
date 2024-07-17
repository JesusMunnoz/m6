const mongoose = require('mongoose');

// cambiar a userSin o UserCon si desea validadores o no

//const { Profile } = require ('./userSin')
const { Profile } = require ('./userCon')
const dbmong = 'mongodb://localhost:27017/codenotch';

mongoose.connect(dbmong, {useNewUrlParser: false, useUnifiedTopology: false} )

let profile = new Profile({
    name: "José",
    surname: "Garcia",
    dateOfBirth: new Date(1997, 1, 1), 
    comments: "Esto es un comentario",
    role: "USER"
});

profile.save()

.then( resp =>  {
    console.log('doc guardado correctamente');
    console.log(resp);

})

.catch(err => {
    console.error("ERROR: " + err);
});