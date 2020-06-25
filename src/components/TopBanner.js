import React from 'react';
import { Container, Jumbotron as Jumbo, Figure } from 'react-bootstrap';
import table from './../assets/imgs/BannerThree.png';
import logo from './../assets/imgs/datanadeLogo.png';
import styled from 'styled-components';
import './../assets/MyCSS/myCSS.css';
import { MainCallToAction } from './MainCallToAction';

const BackBanner = styled.div`
    .jumbo {
        background: url(${table}) no-repeat fixed bottom;
        background-size: cover;
        color: black;
        heigth: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const TopBanner = () => (
    <BackBanner>
        <Jumbo fluid className="jumbo">
            <div clasName="overlay"></div>
            <Container>
                <h2>When life gives you data</h2>
                <Figure className="round-moves">
                    <Figure.Image
                        src={logo}
                        width={360}
                        height={360}
                    />
                </Figure>
            </Container>
        </Jumbo>
        <Container>
            <MainCallToAction />
        </Container>
    </BackBanner>
)