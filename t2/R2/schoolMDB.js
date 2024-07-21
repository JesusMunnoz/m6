const mongoose = require ("mongoose");

let studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number
});

studentSchema.add({
    marks:[marksSchema]
})

let subjectSchema = new mongoose.Schema({
    title: String
});

marksSchema.add({
    subject: subjectSchema
})

let teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: [String]
});

subjectSchema.add({
    teachers: [teacherSchema]
})
 
module.exports = mongoose.model("Students", studentSchema, 'students');