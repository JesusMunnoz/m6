const mongoose = require ("mongoose");

let teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: [String],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;