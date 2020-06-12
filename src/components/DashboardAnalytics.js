import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Figure, Jumbotron as Jumbo } from 'react-bootstrap';
import dashboard from './../assets/imgs/dataDashboard.jpg';
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

export const DashboardAnalytics = () => (
    <Styles>
        <Jumbo fluid className="jumboLime">
            <Container>
                <Row>
                    <Col sm>
                        <h2>Datanade Visualisation</h2>
                        <p className="boldP">
                            At Datanade we visualise your data in interactive dashboards to help your whole team get the full picture from multiple viewpoints.
                        </p>
                        <p className="emphasisP">
                            We can use your current visualisation tools such as BI applications or create visualisations using Python or other languages.
                        </p>
                    </Col>
                    <Col sm>
                        <Figure>
                            <Figure.Image
                                width={420}
                                height={360}
                                src={dashboard}
                            />
                        </Figure>
                    </Col>
                </Row>
            </Container >
        </Jumbo>
    </Styles>
)