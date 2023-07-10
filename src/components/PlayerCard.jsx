import { Card, Col } from 'react-bootstrap';

const PlayerCard = ({ name, img, statistics }) => {
    return (
        <Col
            className="d-flex justify-content-center"
        >
            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {statistics.map((item, i) => {
                            return <p key={i}>{item}</p>
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>


        </Col>
    );
}

export default PlayerCard;