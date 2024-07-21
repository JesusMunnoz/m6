const mongoose = require ("mongoose");
const Students = require ("./schoolMDB")

mongoose.connect('mongodb://localhost:27017/school', 
    { useNewUrlParser: true, useUnifiedTopology: true });

let std1 = new Students({
    firstname: "Carlos",
    lastname: "Ramirez", 
    marks:
    [
        {
            date: new Date ("2424-01-01"), mark: 1, subject: 
            {title: "esgrima",teachers: [
                { 
                    firstname: "Iñigo", lastname:"Montoya", groups:["A", "C"]
                }]
            }
        },
        {
            date: new Date ("2424-01-01"), mark: 2, subject: 
            {title: "Inconcebible",teachers: [
                { 
                    firstname: "Mr", lastname:"Vizzini", groups:["A", "B"]
                }]
            }
        }
    ]
});

let std2 = new Students ({
    firstname: "Juana",
    lastname: "de Castilla", 
    marks:
    [
        {
            date: new Date ("2424-01-01"), mark: 3, subject: 
            {title: "Lucha",teachers: [
                { 
                    firstname: "Señor", lastname:"Fezzik", groups:["C", "B"]
                }]
            }
        },
        {
            date: new Date ("2424-01-01"), mark: 4, subject: 
            {title: "Inconcebible",teachers: [
                { 
                    firstname: "Mr", lastname:"Vizzini", groups:["A", "B"]
                }]
            }
        }
    ]
});

let std3 = new Students ({
    firstname: "Isabel",
    lastname: "la Católica", 
    marks:
    [
        {
            date: new Date ("2424-01-01"), mark: 5, subject: 
            {title: "Literatura medieval",teachers: [
                { 
                    firstname: "Lady", lastname:"Buttercup", groups:["A", "C"]
                }]
            }
        }
    ]
});

let std4 = new Students ({
    firstname: "Ana",
    lastname: "Bolena", 
    marks:
    [
        {
            date: new Date ("2424-01-01"), mark: 6, subject: 
            {title: "enfermería",teachers: [
                { 
                    firstname: "Lady", lastname:"Valerie", groups:["C", "B"]
                }]
            }
        },
        {
            date: new Date ("2424-01-01"), mark: 9, subject: 
            {title: "Inconcebible",teachers: [
                { 
                    firstname: "Mr", lastname:"Vizzini", groups:["A", "B"]
                }]
            }
        }
    ]
});

async function meterStudiantes() {
    try {
        await std1.save();
        console.log("std1 guardado");
        await std2.save();
        console.log("std2 guardado");
        await std3.save();
        console.log("std3 guardado");
        await std4.save();
        console.log("std4 guardado");
    } catch (error) {
        console.error(error);
        mongoose.disconnect();
    }
}

meterStudiantes();