const mongoose = require ("mongoose");

let teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: [String]
}); 

let subjectSchema = new mongoose.Schema({
    title: String,
    teachers: teacherSchema
});

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: subjectSchema
});

let studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    marks: marksSchema
});


module.exports = mongoose.model("Students", studentSchema, 'students');