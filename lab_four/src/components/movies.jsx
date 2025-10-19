import MovieItem from './movieItem'; //imports movie item for display
const Movies = (props)=>{

    //loops through my movies array with map function
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}
export default Movies;