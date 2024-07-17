const mongoose = require ("mongoose");

let studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;