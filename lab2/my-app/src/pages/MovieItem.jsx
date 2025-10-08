const MovieItem = (props) =>{
    return(
        <div>
            <h1>{props.myMovie.Title}</h1>
            <h1>{props.myMovie.Year}</h1>
            <img src={props.myMovie.Poster}></img>
        </div>
    );
}

export default MovieItem;