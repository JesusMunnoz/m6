const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String, 
    role: String
});

const CredentialsSchema = new mongoose.Schema({
    adress: String,
    phone: String,
    email: String
});

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
const Credentials = mongoose.model("Credentials", CredentialsSchema);

module.exports = mongoose.model = {User, Profile, Credentials};