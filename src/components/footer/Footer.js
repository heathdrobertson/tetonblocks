import React from 'react';
import { Container, Row, Col, Button, ButtonGroup, Figure } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaRssSquare, FaYoutubeSquare, FaGithubSquare, FaRedditSquare, FaTwitterSquare, FaTelegram, FaLinkedin } from 'react-icons/fa';

import Profile from '../../assets/images/heath_profile.jpg';

const Footer = () => {
        return (
<div className="py-5 text-center tb-footer bg-secondary">
    <Container>

        <Row>
            <Col className="text-center">

            <Figure className="text-center">
                <Figure.Image width={110} alt="171x180" src={Profile} rounded />
                <Figure.Caption className="text-primary"> Heath Robertson - Owner </Figure.Caption>
            </Figure>
            </Col>
        </Row>
        <Row>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 100">
                                                <path className="st_orange" d="M230.5,27.4c0-3.2-2.6-5.9-5.9-5.9H27.4c-3.2,0-5.9,2.6-5.9,5.9v67.8l9.8-8.3l0,0h0l0.9,2.9l3.9-2.4l2.4-1.5
                                                        l-1.3-3.2l19.3-21.6l22.8-12.9l3.5,4.1L94,82.7l14.6,4.2h0l0,0l4.7,6.4v0v4.3l2.8-5.4l2.8-5.4h10.7l1.4-2.7l1.4-2.7l7.4-2.3l7.4-2.3
                                                        l5.1-6.7l0,0v0l23.2,19.8h4l1.6-3.3l3.1-6.6l14.5-8.4l7.2-4.2l3.3,1.9l1.4,0.8l2.9-5.4h0h10.5l6.4,12.1V27.4z"/>
                                                </svg>
        </Row>

        <Row className="my-4">
            <Col xs={12} md={4}>
            <a className="text-primary" href="https://toilethill.io" rel="noopener noreferrer"
                target="_blank" alt="ToiletHill Blog">ToiletHill.io</a>
            </Col>
            <Col xs={12} md={4}>
            <a className="text-primary" href="mailto:CodeHappens@ToiletHill.io?subject=From%20TetonBlocks%20Website"
                rel="noopener noreferrer" target="_blank" alt="Email">CodeHappens@ToiletHill.io</a>
            </Col>
            <Col xs={12} md={4}>
            <a className="text-primary" href="https://heathrobertson.com" rel="noopener noreferrer"
                target="_blank" alt="Heath Robertson">HeathRobertson.com</a>
            </Col>
        </Row>

        <IconContext.Provider value={{className: "tb-footer-icons", size: "2em"}}>

            <Row>
                <Col className="mb-3">
                <ButtonGroup size="sm" aria-label="Fallow Me">
                    <Button variant="primary" href="https://toilethill.io/posts/" target="_blank" title="Blog"><FaRssSquare /></Button>
                    <Button variant="primary" href="https://www.youtube.com/channel/UCG4Av0xeLAD-hJCQHMrYqtA"
                        target="_blank" title="YouTube"><FaYoutubeSquare /></Button>
                    <Button variant="primary" href="https://github.com/HeathDRobertson" target="_blank"
                        title="GitHub Repos"><FaGithubSquare /></Button>
                </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <ButtonGroup size="sm" aria-label="Social Networks">
                    <Button variant="primary" href="https://t.me/HeathDRobertson" target="_blank" title="Telegram"><FaTelegram /></Button>
                    <Button variant="primary" href="https://twitter.com/ToiletHill" target="_blank"
                        title="Twitter"><FaTwitterSquare /></Button>
                    <Button variant="primary" href="https://www.reddit.com/user/ToiletHill" target="_blank"
                        title="Reddit"><FaRedditSquare /></Button>
                    <Button variant="primary" href="https://linkedin.com/in/heathrobertson" target="_blank"
                        title="LinkedIn"><FaLinkedin /></Button>
                </ButtonGroup>
                </Col>
            </Row>

        </IconContext.Provider>

    </Container>
</div>
                        );
}

export default Footer;
