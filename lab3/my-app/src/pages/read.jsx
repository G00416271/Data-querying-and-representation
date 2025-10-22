import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";

const Read = () => {
  const [myMovies, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("https://data-rep-mern-application.github.io/dataserver/movies.json")
      .then((response) => {
        console.log(response);
        setMovie(response.data.myMovies); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello from Read component</h1>
      <Movies myMovies={myMovies}></Movies>
    </div>
  );
};

export default Read;




































// import Movies from './movies.jsx';

// const Read = () =>{


// //Movie data
// const data = 
//     [
//   {
//     "Title": "Avengers: Infinity War",
//     "Year": "2018",
//     "imdbID": "tt4154756",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//   },
//   {
//     "Title": "Captain America: Civil War",
//     "Year": "2016",
//     "imdbID": "tt3498820",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
//   },
//   {
//     "Title": "World War Z",
//     "Year": "2013",
//     "imdbID": "tt0816711",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
//   }
// ]
//     return(
//         <div>
//             <h1>Hello from read component</h1>
//             <Movies myMovies={data}></Movies> {/* movies from dataset */}
//         </div>
//     );
// }

// export default Read;