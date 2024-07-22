let mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/codenotchT4', 
    { useNewUrlParser: true, useUnifiedTopology: true }
)

.then((db)=> {
    console.log("database connected on " + db.connection.host)
}) 
.catch((error) => {
    console.log(error)
})