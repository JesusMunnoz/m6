const mongoose = require("mongoose");
const Students = require("./schoolMDB");

mongoose.connect('mongodb://localhost:27017/school', 
    { useNewUrlParser: true, useUnifiedTopology: true });

// -- Todas las notas de un alumno --

async function getNotasAlumno(firstname, lastname) {
    try {
        const student = await Students.findOne({ firstname, lastname }, { "marks.mark": 1, _id: 0 });
        if (student) {
            return student.marks.map(mark => mark.mark);
        } else {
            console.log("Student not found");
            return [];
        }
    } catch (error) {
        console.error(error);
    }
}

// -- Todas las asignaturas de un alumno --

async function getAsignaturasAlumno(firstname, lastname) {
    try {
        const student = await Students.findOne({ firstname, lastname }, { "marks.subject.title": 1, _id: 0 });
        if (student) {
            return student.marks.map(mark => mark.subject.title);
        } else {
            console.log("Student not found");
            return [];
        }
    } catch (error) {
        console.error(error);
    }
}

// -- Todos los profesores de un alumno --

async function getProfesoresAlumno(firstname, lastname) {
    try {
        const student = await Students.findOne({ firstname, lastname }, { "marks.subject.teachers": 1, _id: 0 });
        if (student) {
            const teachers = [];
            student.marks.forEach(mark => {
                mark.subject.teachers.forEach(teacher => {
                    teachers.push(`${teacher.firstname} ${teacher.lastname}`);
                });
            });
            return teachers;
        } else {
            console.log("Student not found");
            return [];
        }
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    const notasJuana = await getNotasAlumno("Juana", "de Castilla");
    console.log("notas Juana de Castilla --> ", notasJuana);

    const asignaturasJuana = await getAsignaturasAlumno("Juana", "de Castilla");
    console.log("asignaturas Juana de Castilla --> ", asignaturasJuana);

    const profesoresJuana = await getProfesoresAlumno("Juana", "de Castilla");
    console.log("profesores Juana de Castilla --> ", profesoresJuana);

    const notasIsabel = await getNotasAlumno("Isabel", "la Católica");
    console.log("notas Isabel la Católica --> ", notasIsabel);

    const asignaturasIsabel = await getAsignaturasAlumno("Isabel", "la Católica");
    console.log("asignaturas Isabel la Católica --> ", asignaturasIsabel);

    const profesoresIsabel = await getProfesoresAlumno("Isabel", "la Católica");
    console.log("profesores Isabel la Católica --> ", profesoresIsabel);

    mongoose.disconnect();
}

main();