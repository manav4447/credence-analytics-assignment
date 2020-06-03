const express = require('express');
const app = express();
const port = 8000;
//for routes:
// const router = express.Router();

const db = require('./config/mongoose');
const movie = require("./models/movies")
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


var items = [
        {
           name: "harry potter",
           image : "https://bit.ly/2IcnSwz",
           summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry." 
        },
       {      
            name: "The Lord of the Rings: The Fellowship of the Ring",
            image:"https://bit.ly/2tC1Lcg",
            summary : "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed." 
       },
       { 
            name: "Avengers: Endgame",
           image: "https://bit.ly/2Pzczlb", 
           summary : "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe." 
        }
            ];

//routes and controller action 

app.get('/', function(req,res){
    return res.status(200).json( {
        message: "List of Data",
        movies: items
        });
})

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
