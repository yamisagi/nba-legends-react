import { Card, Col } from 'react-bootstrap';
import { useState } from 'react';

const PlayerCard = ({ name, img, statistics }) => {
    const [showStatistics, setShowStatistics] = useState(false);

    const handleCardClick = () => {
        setShowStatistics(!showStatistics);
    };

    const handleCardHover = () => {
        setShowStatistics(true);
    };

    return (
        <Col>
            <Card
                onClick={handleCardClick}
                onMouseEnter={handleCardHover}
                onMouseLeave={() => setShowStatistics(false)}
                className={`player-card ${showStatistics ? 'show-statistics' : ''}`}
            >
                <div className="player-img-container">
                    <Card.Img variant="top" src={img} className="player-img rounded-3" />
                </div>
                <Card.Body className="text-center">
                    <ul className="list-unstyled statistics-list">
                        {statistics.map((item, i) => (
                            <li className="h5 mb-2" key={i}>
                                🏀 {item}
                            </li>
                        ))}
                    </ul>
                </Card.Body>
                <Card.Footer>
                    <Card.Title className="text-center">{name}</Card.Title>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default PlayerCard;
