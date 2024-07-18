const mongoose = require("mongoose");
const { Student, Marks, Subject, Teacher } = require('./schoolMDB');

mongoose.connect('mongodb://localhost:27017/school', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

/*Student.find({"$and": [{"firstname": "Carlos"}, {"lastname": "Ramirez"}]})
.then (function(items){
    console.log(items);
    mongoose.disconnect();
})
.catch(function(){
    console.log("error")
})*/

// -- Todas las notas de un alumno --

/*
Student.findOne({ firstname: 'Carlos', lastname: 'Ramirez' })
.then(student => {
    if (!student) {
        console.log("No se encuentra");
        return;
    }
    return Marks.find({ student: student._id }).populate('subject');
})
.then(marks => {
    if (!marks) return;
    console.log("------------Notas----------");
    marks.forEach(mark => {
        console.log(`Asignatura: ${mark.subject.title}, Nota: ${mark.mark}`);
    });
    mongoose.disconnect();
})

.catch(error => {
    console.log("Error------", error);
    mongoose.disconnect();
});
*/

// -- Todas las asignaturas de un alumno --
/*
Student.findOne({ firstname: 'Ana', lastname: 'Bolena' })
.then(student => {
    if (!student) {
        console.log("no se encuentra");
        return;
    }
    return Marks.find({ student: student._id }).populate('subject');
})
.then(marks => {
    if (!marks) return;
    const subjects = new Set();
    marks.forEach(mark => {
        subjects.add(mark.subject.title);
    });
    console.log("-------------Asignaturas-----------------");
    subjects.forEach(subject => {
        console.log(subject);
    });
    mongoose.disconnect();
})

.catch(error => {
    console.log("error--", error);
    mongoose.disconnect();
});
*/


// --   Todos los profesores de un alumno --

Student.findOne({ firstname: 'Juana', lastname: 'De Castilla' })
    .then(student => {
        if (!student) {
            console.log("no se encontra");
            return;
        }
        return Marks.find({ student: student._id }).populate({
            path: 'subject',
            populate: { path: 'teacher' }
        });
    })
    .then(marks => {
        if (!marks) return;
        const teachers = new Set();
        marks.forEach(mark => {
            teachers.add(`${mark.subject.teacher.firstname} ${mark.subject.teacher.lastname}`);
        });
        console.log("------------Profesores-----------");
        teachers.forEach(teacher => {
            console.log(teacher);
        });
        mongoose.disconnect();
    })
    .catch(error => {
        console.log("erro-----", error);
        mongoose.disconnect();
    });
