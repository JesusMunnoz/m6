const mongoose = require ("mongoose");
const Teacher = require ('./teachers')

let subjectSchema = new mongoose.Schema({
    title: String,
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}
})

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;