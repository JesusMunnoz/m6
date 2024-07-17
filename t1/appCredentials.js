const mongoose = require('mongoose');

// cambiar a userSin o UserCon si desea validadores o no

//const { Credentials } = require ('./userSin')
const { Credentials } = require ('./userCon')
const dbmong = 'mongodb://localhost:27017/codenotch';

mongoose.connect(dbmong, {useNewUrlParser: false, useUnifiedTopology: false} )

let credentials = new Credentials({
    address: "Avenida del Mediterraneo 45",
    phone: 123456789,
    email: "pepin@gmail.com"
});

credentials.save()

.then( resp =>  {
    console.log('doc guardado correctamente');
    console.log(resp);

})

.catch(err => {
    console.error("ERROR: " + err);
});