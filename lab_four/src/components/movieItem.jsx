import Card from 'react-bootstrap/Card'; /// import card from bootstraps 
const MovieItem = (props) => { //gets movie item 
    return (
        <div>
            {/* card styling */}
            {/* Dynamic card generation */}
            <Card className="text-center">  
                <Card.Body>
                    <Card.Title>{props.mymovie.Title}</Card.Title>
                    <img src={props.mymovie.Poster} />
                </Card.Body>
                <Card.Footer className="text-muted">{props.mymovie.Year}</Card.Footer>
            </Card>
        </div>
    );
}
export default MovieItem;