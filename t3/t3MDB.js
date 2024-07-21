const mongoose = require ('mongoose');

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String
});

let teacherSchema = new mongoose.Schema ({
    teacher_first_name: String,
    teacher_last_name: String
});

marksSchema.add({
    teachers:[teacherSchema]
});

module.exports = mongoose.model("Marks", marksSchema, "marks");