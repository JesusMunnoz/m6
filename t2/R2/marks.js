const mongoose = require ("mongoose");
const Student = require ('./students')
const Subject = require ('./subject')

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student: {Type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
    subject: {Type: mongoose.Schema.Types.ObjectId, ref: 'Subject'}
})

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;