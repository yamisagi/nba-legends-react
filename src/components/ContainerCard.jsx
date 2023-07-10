import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from '../helpers/data';
import PlayerCard from "./PlayerCard";


const CardContainer = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.trim().toLowerCase());
    })

    return (
        <Container className="py-3">
            <Form.Control placeholder="Search Player" type="search" onChange={handleSearch} />
            <Row xs={1} sm={2} md={2} lg={4} xl={4} className="g-3 mt-5">
                {filteredData.map((item, i) => (
                    <Col key={i}>
                        <PlayerCard {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardContainer;