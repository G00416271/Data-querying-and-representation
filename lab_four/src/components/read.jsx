import Movies from "./movies"; 
import { useEffect, useState } from "react"; //import useffect
import axios from "axios"; // axios



function read(){
    const [myMovies, setMovie] = useState([]); //sets use state 

    useEffect(() => { //axios fetches from Json 
        axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
            .then((response) => {
                setMovie(response.data.movies);
                console.log("response: " + response.data.movie)
            })
            //error handling
            .catch((error) => {
                console.log(error);
            });
    },  []);

    return (
        <div>
            <h1>Hello from Read component</h1>
            <Movies myMovies={data}></Movies> 
        </div>
    );
}

export default read;