import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from '../helpers/data';

const CardContainer = () => {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.trim().toLowerCase());
    })
    console.log(filteredData);
    return (
        <>
            <Form.Control placeholder="Search Player" type="search" onChange={handleSearch} />
            <Container className="p-3 rounded-3 card-container my-3">
                <Row xs={2} md={4} lg={6} className="justify-content-center g-3">
                    <Col> <h1>Player Name</h1> </Col>
                    <Col> <h1>Player Name</h1> </Col>
                    <Col> <h1>Player Name</h1> </Col>
                </Row>
            </Container>
        </>
    );
}

export default CardContainer;