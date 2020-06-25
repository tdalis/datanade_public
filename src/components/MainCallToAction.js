import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


export const MainCallToAction = () => (
    <div className="mb-2">
        <Button href="/contact" variant="primary" size="lg">
            Book an appointment
                    </Button>{' '}
        <Button href="/services" variant="success" size="lg">
            Learn About Our Services
        </Button>
    </div>

)
