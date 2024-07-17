const mongoose = require('mongoose');

// cambiar a userSin o UserCon si desea validadores o no

//const { User } = require ('./userSin')
const { User } = require ('./userCon')
const dbmong = 'mongodb://localhost:27017/codenotch';

mongoose.connect(dbmong, {useNewUrlParser: false, useUnifiedTopology: false} )

let user = new User({
    login: "Pepito",
    password: "p3p1to"
});

user.save()

.then( resp =>  {
    console.log('doc guardado correctamente');
    console.log(resp);

})

.catch(err => {
    console.error("ERROR: " + err);
});