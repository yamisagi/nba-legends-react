import { useState } from "react";
import { Row, Container } from "react-bootstrap";
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
        <>
            <Form.Control placeholder="Search Player" type="search" onChange={handleSearch} />
            <Container className="p-3 rounded-3 card-container my-3">
                <Row xs={2} md={4} lg={6} className="justify-content-center g-3">
                    {filteredData.map((item, i) => {
                      return <PlayerCard key={i} {...item} />
                    })}
                </Row>
            </Container>
        </>
    );
}

export default CardContainer;