const express = require('express'); //require expresss
const app = express();
const port = 3000;//Define port number
const bodyParser = require('body-parser'); // MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

//primary server entry point 
app.get('/', (req, res) => {
    res.send('Hello World'); 
    
});


//send html file
app.get('/index', (req,res) => {
    res.sendFile(__dirname+ '/index.html')
})


//whatever entry point 
app.get('/whatever', (req, res) => {
    res.send('Hello from whatever');
});



//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//myname req
app.get('/name/:myname', (req, res) => {
    res.send('Hello ' + req.params.myname);
});

// takes first name and last name from url (GET REQUEST)
app.get('/nameMe', (req, res) => {// port directory
    const firstname = req.query.firstname; //first name 
    const lastname = req.query.lastname; //last name 
    res.send(`Hello ${firstname} ${lastname}`); //use data from url
});

// takes first name and last name from url (POST REQUEST)
// more secure way that GET
app.post('/nameMe', (req, res) => {// port directory
    const firstname = req.body.firstname; //first name 
    const lastname = req.body.lastname; //last name 



    
    res.send(`Hello ${firstname} ${lastname}`); //use data from url
});


//movie api
app.get('/api/movies', (req, res) => {
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json(movies);
});




//listening on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});