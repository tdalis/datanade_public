import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Figure, Jumbotron as Jumbo } from 'react-bootstrap';
import dataFocus from './../assets/imgs/codingGlasses.jpg';
import './../assets/MyCSS/myCSS.css';

const Styles = styled.section`
    .jumboLime {    
        background: #eaff40;
    }

    .jumboLimeLighter {
        background: #f3ff90;
    }

    .boldP {
        font-weight: bold;
        font-size: 20px;
    }

    .emphasisP {
        font-size: 20px;
    }
`;


export const DataFocus = () => (
    <Styles>
        <Jumbo fluid className="jumboLimeLighter">
            <Container>
                <Row>
                    <Col sm>
                        <Figure>
                            <Figure.Image
                                width={420}
                                height={360}
                                src={dataFocus}
                            />
                        </Figure>
                    </Col>
                    <Col sm>
                        <h2>Data Science should help you focus</h2>
                        <p className="boldP">
                            Do you have more data than you can digest?
                            <br />
                            You don't know where to start your analysis from?
                        </p>
                        <p className="emphasisP">
                            At Datanade we use data science to help you automate the organisation of your data and help you focus on the analysis that will help you meet your business needs more effectively
                        </p>
                    </Col>
                </Row>
            </Container >
        </Jumbo>
    </Styles>
)