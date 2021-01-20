//LINE 1---------IF NOT COMPLETE ALREADY***INSTALL MODULES*** then>>> Import Mongoose from NodeMods Folder.
//LINE 5_________________**CONNECT config.js to "products" DB using mongoose.connect**//this sets our db to be {state} essentially.

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now in the mainframe!!"))     //this will show proof of server life, in the server terminal its like a success msg
    .catch(() => console.log("MELT DOWN MELT DOWN"))                 // catch works like a validation, it is telling you there are mistakes in the server, (adverse success/else)
