const mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/school', 
    {useNewUrlParser: false, useUnifiedTopology: false }  
);

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


async function insertarDocumentos() {
    const profe1 = new Teacher({ firstname: 'Inigo', lastname: 'Montoya', groups: ['A', 'B'] });
    const profe2 = new Teacher({ firstname: 'Lady', lastname: 'Buttercup', groups: ['C'] });
    const profe3 = new Teacher({ firstname: 'Lady', lastname: 'Valerie', groups: ['B', 'D'] });
    const profe4 = new Teacher({ firstname: 'Mr', lastname: 'Fezzik', groups: ['C'] });
    const profe5 = new Teacher({ firstname: 'Mr', lastname: 'Vizzini', groups: ['A', 'B', 'C', 'D'] });

    await profe1.save();
    await profe2.save();
    await profe3.save();
    await profe4.save();
    await profe5.save();

    console.log("Profes guardados INCONCEVIBLE");
  
    const subject1 = new Subject({ title: 'Esgrima', teacher: profe1._id });
    const subject2 = new Subject({ title: 'Mi Westley vendrá a salvarme', teacher: profe2._id });
    const subject3 = new Subject({ title: 'Matasanos', teacher: profe3._id });
    const subject4 = new Subject({ title: 'Lucha', teacher: profe4._id });
    const subject5 = new Subject({ title: 'Inconcebible', teacher: profe5._id });

    await subject1.save();
    await subject2.save();
    await subject3.save();
    await subject4.save();
    await subject5.save();

    
    console.log(" Asignaturas guardadas ");

    const student1 = new Student({ firstname: 'Carlos', lastname: 'Ramirez' });
    const student2 = new Student({ firstname: 'Ana', lastname: 'Lopez' });
    const student3 = new Student({ firstname: 'Hernan', lastname: 'Cortes' });
    const student4 = new Student({ firstname: 'Ana', lastname: 'Bolena' });
    const student5 = new Student({ firstname: 'Juana', lastname: 'De Castilla' });

    await student1.save();
    await student2.save();
    await student3.save();
    await student4.save();
    await student5.save();

    console.log(" alumnos guardadas ");

    const mark1 = new Marks({ date: new Date(), mark: 8, student: student1._id, subject: subject1._id });
    const mark2 = new Marks({ date: new Date(), mark: 9, student: student1._id, subject: subject5._id });
    const mark3 = new Marks({ date: new Date(), mark: 8, student: student2._id, subject: subject5._id });
    const mark4 = new Marks({ date: new Date(), mark: 5, student: student2._id, subject: subject3._id });
    const mark5 = new Marks({ date: new Date(), mark: 6, student: student3._id, subject: subject5._id });
    const mark6 = new Marks({ date: new Date(), mark: 5, student: student3._id, subject: subject1._id });
    const mark7 = new Marks({ date: new Date(), mark: 0, student: student4._id, subject: subject4._id });
    const mark8 = new Marks({ date: new Date(), mark: 4, student: student4._id, subject: subject5._id });
    const mark9 = new Marks({ date: new Date(), mark: 5, student: student5._id, subject: subject3._id });
    const mark10 = new Marks({ date: new Date(), mark: 5, student: student5._id, subject: subject5._id });

    await mark1.save();
    await mark2.save();
    await mark3.save();
    await mark4.save();
    await mark5.save();
    await mark6.save();
    await mark7.save();
    await mark8.save();
    await mark9.save();
    await mark10.save();

    console.log('---------- notas y todo guardadso -----------');
}

insertarDocumentos().then(() => mongoose.disconnect());