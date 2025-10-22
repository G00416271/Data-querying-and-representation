const MovieItem = (props) =>{
    return(
        //Data elements from dataset
        <div>
            <h1>{props.myMovie.Title}</h1> {/* Title  */}
            <h1>{props.myMovie.Year}</h1> {/* year */}
            <img src={props.myMovie.Poster}></img> {/* poster as URL */}
        </div>
    );
}

export default MovieItem;