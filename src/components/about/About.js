import React from 'react';
import { Container, Card } from 'react-bootstrap';

import Logos from '../logos/Logos.js';

function Footer() {
        return (
        <>

                <Card className="my-3">
                <Card.Body>
                        <Card.Title> What to expect from TetonBlocks: </Card.Title>
                <Card.Text>
                <p className="text-justify">
                Video tutorials, blog posts that provide a pathway to get you up to speed in using these new technologies in a best practices secure manner. 
                </p>
                <p className="text-justify">
                TetonBlocks is owned and operated by, Heath Robertson
                </p>
                </Card.Text>
                </Card.Body>
                </Card>
        </>
        );
}

export default Footer;
