const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://ashdiyali:1234@cluster0.n9wgu.mongodb.net/To-do-list?retryWrites=true&w=majority'; 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function(){
    //your tutorial and new code go here. 

    //const var db
//set it equal to connection prop of the mongoose object
const db = mongoose.connection;

//but then we access the on and once methods of our connection property form our mongoose object 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");
    //schema
    const kittySchema = new mongoose.Schema({
        name : String
    });
    

    //
    kittySchema.methods.speak = function() {
        let greeting;
        if (this.name){
            greeting = "Meow name is " + this.name;
        } else {
            greeting = "I don't have a name";
        }
        console.log(greeting);
    }
    //model
    const Kitten = mongoose.model('Kitten', kittySchema);
    //documents 
    const silence = new Kitten ({name: "Silence"});
    console.log(silence.name);
    const fluffy = new Kitten({name : "Fluffy"});

    fluffy.speak();
    silence.speak();

    //save after creating/ updating
    fluffy.save(function(err, cat){
        if (err) return console.error(err);
        cat.speak();
    });
    silence.save(function(err, cat){
        if (err) return console.error(err);
        cat.speak();
    });
    //static method- attached directly to our model/class

    Kitten.find(function(err, kittens){
        if (err) return console.error(err);
        console.log(kittens);
    })



});
    console.log("We're connected");
    //schema
}); 