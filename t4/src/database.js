let mongoose = require ("mongoose");

mongoose.connect('mongodb://localhost:27017/t4', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

.then ((db) => {
    console.log("database connected on " + db.connection.host)
});
.catch((error) => {
    console.log(error);
})