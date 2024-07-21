const mongoose = require('mongoose');
const Marks = require('./t3MDB');

mongoose.connect('mongodb://localhost:27017/t3', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// nota media asignatura

async function mediaAsignatura(subject_name) {
    try {
        const result = await Marks.aggregate([
            { $match: { subject_name: subject_name } },
            { $group: {
                _id: '$subject_name',
                averageMark: { $avg: '$mark' }
            }}
        ]);

        if (result.length > 0) {
            console.log(`nota media en --  ${subject_name} -- ${result[0].averageMark}`);
        } else {
            console.log(`no hay notas en -- ${subject_name}`);
        }
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

mediaAsignatura('Matemáticas');
//mediaAsignatura('Física');
//mediaAsignatura('Lengua');

// numero alumnos en bootcamp

async function totalAlumnos() {
    try {
        const totalStudents = await Marks.aggregate([
            { $count: "totalStudents" }
        ]);
        console.log(`numero de alumnos -- ${totalStudents[0].totalStudents}`);
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//totalAlumnos();

// nombre y apellidos de alumnos

async function nom_Ape_Stdts() {
    try {
        const students = await Marks.aggregate([
            { $project: { student_first_name: 1, student_last_name: 1 } }
        ]);
        console.log('-- alumnos de bootcamp --');
        students.forEach(student => {
            console.log(`${student.student_first_name} ${student.student_last_name}`);
        });
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//nom_Ape_Stdts();

// nombre y apellidos de profes

async function profes() {
    try {
        const teachers = await Marks.aggregate([
            { $unwind: '$teachers' },
            { $project: { 'teachers.teacher_first_name': 1, 'teachers.teacher_last_name': 1 } }
        ]);
        console.log('-- profesores de bootcamp --');
        teachers.forEach(teacher => {
            console.log(`${teacher.teachers.teacher_first_name} ${teacher.teachers.teacher_last_name}`);
        });
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//profes();

// numero de alumnos por grupo en orden inverso

async function stdtsByGrup() {
    try {
        const result = await Marks.aggregate([
            { $group: { _id: '$group_name', totalStudents: { $sum: 1 } } },
            { $sort: { _id: -1 } }
        ]);

        result.forEach(group => {
            console.log(`Grupo ${group._id}: ${group.totalStudents} estudiantes`);
        });
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//stdtsByGrup();

// top5 de los nombres de las asignaturas cuya nota media sea mayor que 5

async function top5() {
    try {
        const result = await Marks.aggregate([
            { $group: { _id: '$subject_name', averageMark: { $avg: '$mark' } } },
            { $match: { averageMark: { $gt: 5 } } },
            //{ $sort: { averageMark: -1 } },
            { $limit: 5 }
        ]);

        console.log('esto es top 5');
        result.forEach(subject => {
            console.log(`${subject._id} -- nota media ${subject.averageMark}`);
        });
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//top5();

//numero de profesores por asignatura

async function profesPor() {
    try {
        const result = await Marks.aggregate([
            { 
                $group: {
                    _id: '$subject_name',
                    totalTeachers: { $sum: { $size: '$teachers' } }
                }
            }
        ]);

        console.log('profes por asignatura');
        result.forEach(subject => {
            console.log(`Asignatura ${subject._id}: ${subject.totalTeachers} profesores`);
        });
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    } 
}

//profesPor();

