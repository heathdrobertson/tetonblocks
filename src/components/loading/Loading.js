import React from 'react';

import Logo from '../../assets/images/svg/TetonBlocks.svg';
import { Spinner, Container } from 'react-bootstrap'


function Loading() {

        return (
                <>
                <Container className="p-5 text-center">
                <img src={Logo} className="tb-logo" alt="TetonBlocks Logo"/>
                <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                </Spinner>
                </Container>
                </>
        )
}

export default Loading;

