const mongoose = require ("mongoose");

// Validadores dentro de los esquemas

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        validate:[
            function(password){
                return password.length >= 8;
            },
            'password necesita ser más largo'
        ],
        select: false
    }
});

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    surname: {
        type: String,
        required: true,
    },
    dateOfBirth: Date,
    comments: String, 
    role: {
        type: String,
        required: true,
        enum: ["USER", "ADMIN"]
    },
});

const CredentialsSchema = new mongoose.Schema({
    adress: String,
    phone: String,
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    }
});

// Midelware

/*ProfileSchema.pre ('save', function(next){
    console.log("middleware de entrada");
    if (this.role === 'USER' || this.role === 'ADMIN'){
        console.log("prosigue, eres " + this.role);
    }else{
        console.log("No eres valido");
        next();
    }
})*/



const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
const Credentials = mongoose.model("Credentials", CredentialsSchema);

module.exports = mongoose.model = {User, Profile, Credentials};