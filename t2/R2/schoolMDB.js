const mongoose = require ("mongoose");

let teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: [String],
});
    
let subjectSchema = new mongoose.Schema({
    title: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
});
    
let studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
});
    
let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }
});

const Teacher = mongoose.model('Teacher', teacherSchema);
const Subject = mongoose.model('Subject', subjectSchema);
const Student = mongoose.model('Student', studentSchema);
const Marks = mongoose.model('Marks', marksSchema);

module.exports = mongoose.model = { Teacher, Subject,  Student, Marks};