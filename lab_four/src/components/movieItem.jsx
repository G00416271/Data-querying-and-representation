import Card from 'react-bootstrap/Card';
const MovieItem = (props) => {
    return (
        <div>
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