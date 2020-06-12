import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MainStatement } from './components/MainStatement';
import styled from 'styled-components';
import { DataFocus } from './components/DataFocus';
import { DashboardAnalytics } from './components/DashboardAnalytics';
import { TopBanner } from './components/TopBanner';


const WrapperMain = styled.section`
    .wrapper{
        background: #fff669;
    }
`;


export const Home = () => (
    <Container fluid>
        <Row>
            <Container fluid>
                <MainStatement />
            </Container>
        </Row>
        <Row>
            <Container fluid>
                <DataFocus />
            </Container>
        </Row>
        <Row>
            <Container fluid>
                <DashboardAnalytics />
            </Container>
        </Row>
    </Container>
)