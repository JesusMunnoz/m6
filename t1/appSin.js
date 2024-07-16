const mongoose = require('mongoose');
const {User, Profile, Credentials} = require ('./userSin')
const dbmong = 'mongodb://localhost:27017/codenotch';

mongoose.connect(dbmong, {useNewUrlParser: false, useUnifiedTopology: false} )

.then(() => {
    console.log('Connected to MongoDB');

    let profile = new Profile({
        name: "José",
        surname: "Garcia",
        dateOfBirth: new Date(1997, 1, 1), 
        comments: "Esto es un comentario",
        role: "USER"
    });

    let credentials = new Credentials({
        address: "Avenida del Mediterraneo 45",
        phone: 123456789,
        email: "pepin@gmail.com"
    });

    let userDocument = new User({
        login: "Pepito",
        password: "p3p1to"
    });

    return Promise.all([profile.save(), credentials.save(), userDocument.save()]);

})

.then(([safeProfile, safeCredentials, safeUser]) => {

    console.log("docs guardados");
    console.log("Perfil");
    console.log(safeProfile);
    console.log("Credenciales");
    console.log(safeCredentials);
    console.log("Usuario");
    console.log(safeUser);
    mongoose.connection.close();
})

.catch(err => {
    console.error("ERROR: " + err);
});