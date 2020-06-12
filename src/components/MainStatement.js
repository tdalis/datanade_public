import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Figure, Jumbotron as Jumbo } from 'react-bootstrap';
import relax from './../assets/imgs/sitBackRelax.jpg';
import './../assets/MyCSS/myCSS.css';

const Styles = styled.section`
    .jumboLime {    
        background: #eaff40;
    }

    .jumboLimeLighter {
        background: #f3ff90;
    }
`;

export const MainStatement = () => (
    <Styles>
        <Jumbo fluid className="jumboLime">
            <Container>
                <Row>
                    <Col sm>
                        <h2>Datanade is Data Science made simple</h2>
                        <h3>Imagine data analytics helping you make accurate decisions faster;</h3>
                        <h3>It wouldn't be data analytics, it would be Data Science</h3>
                        
                    </Col>
                    <Col sm>
                        <Figure>
                            <Figure.Image
                                width={420}
                                height={360}
                                src={relax}
                            />
                        </Figure>
                    </Col>
                </Row>
            </Container >
        </Jumbo>
    </Styles>
)