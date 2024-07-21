const mongoose = require ("mongoose");
const Marks = require ("./t3MDB");

mongoose.connect('mongodb://localhost:27017/t3', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

let mark1 = new Marks ({
    date: ("2024-06-21"),
    mark: 6,
    student_first_name: "Pepito",
    student_last_name: "Perez",
    group_name: "A",
    subject_name: "Lengua",
    teachers: [
        {
            teacher_first_name: "Don",
            teacher_last_name: "Cervantes"
        }
    ]
});

let mark2 = new Marks ({
    date: ("2024-06-21"),
    mark: 7,
    student_first_name: "Ana",
    student_last_name: "Garcia",
    group_name: "A",
    subject_name: "Lengua",
    teachers: [
        {
            teacher_first_name: "Don",
            teacher_last_name: "Cervantes"
        }
    ]
});
let mark3 = new Marks ({
    date: ("2024-06-21"),
    mark: 8,
    student_first_name: "Luis",
    student_last_name: "de la Vega",
    group_name: "A",
    subject_name: "Lengua",
    teachers: [
        {
            teacher_first_name: "Don",
            teacher_last_name: "Cervantes"
        }
    ]
});
let mark4 = new Marks ({
    date: ("2024-06-21"),
    mark: 6,
    student_first_name: "Jose",
    student_last_name: "Pineda",
    group_name: "C",
    subject_name: "Física",
    teachers: [
        {
            teacher_first_name: "Mr",
            teacher_last_name: "Newton"
        }
    ]
});
let mark5 = new Marks ({
    date: ("2024-06-21"),
    mark: 7,
    student_first_name: "Mafalda",
    student_last_name: "Quino",
    group_name: "C",
    subject_name: "Física",
    teachers: [
        {
            teacher_first_name: "Mr",
            teacher_last_name: "Newton"
        }
    ]
});

let mark6 = new Marks ({
    date: ("2024-06-21"),
    mark: 8,
    student_first_name: "Jaimito",
    student_last_name: "Garcia",
    group_name: "C",
    subject_name: "Física",
    teachers: [
        {
            teacher_first_name: "Mr",
            teacher_last_name: "Newton"
        }
    ]
});

let mark7 = new Marks ({
    date: ("2024-06-21"),
    mark: 7,
    student_first_name: "Manolito",
    student_last_name: "Smith",
    group_name: "B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Sr",
            teacher_last_name: "Tesla"
        }
    ]
});
let mark8 = new Marks ({
    date: ("2024-06-21"),
    mark: 8,
    student_first_name: "Felite",
    student_last_name: "Black",
    group_name: "B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Sr",
            teacher_last_name: "Tesla"
        }
    ]
});
let mark9 = new Marks ({
    date: ("2024-06-21"),
    mark: 9,
    student_first_name: "Libertad",
    student_last_name: "Reverte",
    group_name: "B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Sr",
            teacher_last_name: "Tesla"
        }
    ]
});
let mark10 = new Marks ({
    date: ("2024-06-21"),
    mark: 10,
    student_first_name: "Miguelito",
    student_last_name: "sanchez",
    group_name: "B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Sr",
            teacher_last_name: "Tesla"
        }
    ]
});


async function subirNotas() {
    try {
        await mark1.save();
        console.log("nota 1 guardada");

        await mark2.save();
        console.log("nota 2 guardada");

        await mark3.save();
        console.log("nota 3 guardada");

        await mark4.save();
        console.log("nota 4 guardada");

        await mark5.save();
        console.log("nota 5 guardada");

        await mark6.save();
        console.log("nota 6 guardada");

        await mark7.save();
        console.log("nota 7 guardada");

        await mark8.save();
        console.log("nota 8 guardada");

        await mark9.save();
        console.log("nota 9 guardada");

        await mark10.save();
        console.log("nota 10 guardada");

    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    }
}

subirNotas();