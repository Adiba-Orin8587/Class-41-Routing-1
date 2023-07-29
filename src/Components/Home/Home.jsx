/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <div className='container py-5 my-5'>
            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='card border-0'>
                            <Card.Img variant="top" src="https://www.excelestore.com.bd/public/uploads/all/Ubdj9Jm1nR7KBsL9EDHO5uRZ9llN1J8yGA3ZKoMv.webp" />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-semibold'>Samsung Galaxy A23 6/128</Card.Title>
                                <Card.Text className='fs-6 fw-medium t-g'>
                                    Explore full range of galaxy mobile devices and android smartphones. Buy 3G, 4G, dual sim, touch screen smartphone at best prices in Bangladesh.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;