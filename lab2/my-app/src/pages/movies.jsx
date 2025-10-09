import MovieItem from './MovieItem'

//Manages single instances of movies
const Movies = (props) =>{
    return props.myMovies.map(
        (movie)=>{
             return <MovieItem myMovie={movie}></MovieItem> //returns "My movies" as singular items from the dataset
        }
    );
}

export default Movies