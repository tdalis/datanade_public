import React from 'react';
import { Figure, Card, CardGroup } from 'react-bootstrap';
import visuals from '../assets/imgs/dataVisualisation.svg';
import ml from '../assets/imgs/machine-learning.svg';
import decisions from '../assets/imgs/direction.svg';
import dataAuto from '../assets/imgs/development.svg';
import dataEngi from '../assets/imgs/data-center.svg';
import dataApps from '../assets/imgs/data.svg';
import styled from 'styled-components';

const CardStyles = styled.div`
    .limeCard {
        background: #eaff40;
    }

    .lighterLimeCard {
        background: #f3ff90;
    }
`;

export const ServiceCards = () => (
    <CardStyles>
    <React.Fragment>
        <CardGroup>
            <Card text="black" className="text-center limeCard">
                <Figure>
                    <Figure.Image
                        width={240}
                        height={240}
                        src={visuals}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>Data Visualisation</Card.Title>
                    <Card.Text>
                        Understand your data and gain valuable insights by turning numbers into a story
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card text="black" className="text-center lighterLimeCard">
                <Figure>
                    <Figure.Image
                        width={240}
                        height={240}
                        src={ml}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>Analytics and Machine Learning</Card.Title>
                    <Card.Text>
                        Solving complex business problems with analytics & big data ML models   
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card text="black" className="text-center limeCard">
                <Figure>
                    <Figure.Image 
                        width={240}
                        height={240}
                        src={decisions}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>Business Decisions</Card.Title>
                    <Card.Text>
                        Helping you make the best data driven business decisions
                    </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <br />
            <CardGroup>
            <Card text="black" className="text-center lighterLimeCard">
                <Figure>
                    <Figure.Image 
                        width={240}
                        height={240}
                        src={dataAuto}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>Data Validations</Card.Title>
                    <Card.Text>Ensure and standardaize your data quality</Card.Text>
                </Card.Body>
            </Card>
            <Card text="black" className="text-center limeCard">
                <Figure>
                    <Figure.Image 
                        width={240}
                        height={240}
                        src={dataEngi}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>Data Engineering & Warehousing</Card.Title>
                    <Card.Text>Automate collection, structuring, and storage of your data</Card.Text>
                </Card.Body>
            </Card>
            <Card text="black" className="text-center lighterLimeCard">
                <Figure>
                    <Figure.Image 
                        width={240}
                        height={240}
                        src={dataApps}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>End-to-End ML Apps</Card.Title>
                    <Card.Text>Build ML applications for your business needs</Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </React.Fragment>
    </CardStyles>
)