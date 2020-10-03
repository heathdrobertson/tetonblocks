import React from 'react';
import { Jumbotron, Button, Container, Card, Figure, Row, Col, Image } from 'react-bootstrap';

import Logo from '../../assets/images/svg/TetonBlocks.svg';
import Profile from '../../assets/images/heath_profile.jpg';

function Home() {
        return (
<>
    <Jumbotron id="tb-jt" fluid>
        <Container>
            <Row>
                <Col sm={1} md={3} className="text-center mb-3">
                <img src={Logo} className="tb-logo" alt="TetonBlocks Logo" />
                </Col>
                <Col sm={10} md={9}>
                <h1>Web 3.0</h1>
                <h2>The Value, Governance, & Digital Asset Web</h2>
                <Row>
                        <Col sm={8}>
                <p className="text-justify">
                    We are in the beginning process of another phase of internet-based technological
                    development that will exceed the advancements up to this point.
                    TetonBlocks is a business based in Jackson, Wyoming with the
                    goal to facilitate the adoption of this new technology through
                    education and active participation. Born out of the necessity
                    of assisting family and friends with the adoption of the new
                    value, governance, and digital asset web, Web 3.0.
                </p>
                </Col>
                <Col sm={4}>
            <Figure className="text-left">
                <Figure.Image width={110} alt="171x180" src={Profile} rounded />
                <Figure.Caption className="text-secondary"> Heath Robertson <br />Owner </Figure.Caption>
            </Figure>
                </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </Jumbotron>

    <p className="text-center">
    </p>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title> The Premise </Card.Title>
                <p className="text-justify">
                    Outside quantum entanglement, in the physical universe one thing can only occupy
                    the space that it exists in at any given moment. In the digital
                    world, with a pattern of technologies that give us the internet,
                    a digital item can easily be replicated and exist in a great
                    number of places. For example, a copy of this website, displayed
                    in multiple web browsers, on multiple computers at any given
                    moment.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>


    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Web 1.0</Card.Title>
                <p className="text-justify">
                    Web 1.0 or the internet in the 1990s to the early 2000s, it is fundamentally a
                    series of protocols like HTTP (Hyper Text Transfer Protocol),
                    HTTPS (Hypertext Transfer Protocol Secure), SMTP (Simple Mail
                    Transfer Protocol), TCP/IP (Transmission Control Protocol/Internet
                    Protocol), DHCP (Dynamic Host Configuration Protocol), DNS
                    (Domain Name System), FTP (File Transfer Protocol). These protocols
                    allowed people to present or send information to anyone around
                    the globe at the speed of light with very little cost.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Web 2.0</Card.Title>
                <p className="text-justify">
                    Web 2.0 can be described as the participation web, the social web, or social media.
                    Web 2.0 allows all of us to participate, in real time, in the
                    creation and transmission of information around the globe,
                    that is propelled by primarily a massive marketing engine.
                    The creation of Web 2.0 has increased the participation and
                    usefulness of the internet. As with most things there are positives
                    and there are negatives.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Enter Web 3.0</Card.Title>
                <p className="text-justify">
                    I'll describe it as the ownership and governance web, a digital asset network,
                    or the value and rules web, and it is enabled through a blockchain.
                    What exactly is blockchain? Blockchain, distilled to its simplest
                    idea is essentially, just a pattern. A pattern of technologies,
                    cryptographic, mathematical and computational that with enough
                    people participating, creates an immutable record in time.
                    This computational process creates a consensus among the participants
                    in the network without a central trusted third-party.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>The First Use Case</Card.Title>
                <p className="text-justify">
                    The first large-scale use case and development of this pattern of technologies
                    is <strong>Bitcoin</strong>. The Bitcoin
                    Network is used primarily for the storage of value and the
                    transfer ownership of that value. This value is in the simplest
                    form, human participation in the network that exists around
                    the Bitcoin blockchain. This participation transfers an elusive
                    characteristic from the physical world to the digital world.
                    Immutability. Just as you cannot exist in more than one place
                    at any given moment, value can now exist in the digital world
                    <strong><i>in only one place</i></strong> at any given moment
                    and the ownership can be transferred and recorded at ever-increasing
                    speeds.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Central Trusted Third-party</Card.Title>
                <p className="text-justify">
                    I want to take a moment to draw attention to <strong><i>“...without a central trusted third-party.”</i></strong>.
                    Think about how many of the services and processes we use today
                    that require a trusted third-party as an intermediary to orchestrate
                    a contract between two parties. Banks, insurance, real estate,
                    and governing bodies just to name a few. All the processes
                    within these organizations can have a dramatic decrease in
                    cost and an increase in speed if the processes are transferred
                    to a blockchain. For example, what if you wanted to sell an
                    automobile, you could instantaneously verify your ownership,
                    transfer the ownership, update the insurance policy and have
                    the agreed upon value transferred to you all within a short
                    amount of time, and it is accomplished by a series of immutable,
                    un-hackable blockchain protocols.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Access To New Protocols</Card.Title>
                <p className="text-justify">
                    Now let's go back to Web 1.0. What if you could participate in the evolutionary
                    process developing those protocols? What if you could own a
                    piece of the HTTP protocol or the TCP/IP protocol and that
                    ownership allowed you to utilize the service that those protocols
                    provide? Extending this idea further, what if these protocols
                    were designed in a manner that you could earn these assets
                    / tokens / coins / currencies by providing a necessary function
                    for the network? Do you think that the shotgun blast of information
                    from social media propelled by marketing profitability and
                    AI would have developed in the same way? Probably not. Maybe
                    it would be better, maybe worse or never widely adopted at
                    all. Suffice it to say, with democratic managed ownership,
                    today would look different. Blockchain and digital asset protocols
                    are being developed now with these characteristics.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>The Evolution Of Technology</Card.Title>
                <p className="text-justify">
                    The next evolutionary step of the web is here, we're at the beginning stages of
                    development, and the ideas and technologies are evolving rapidly.
                    In many cases as with the Dot Com bubble in the late 90s, many
                    of the ideas are being built before the underlying technologies
                    are stable, and some good ideas will fail because of this.
                    The flip side, many of these blockchain protocols are learning
                    from how they are being used and developing to accommodate
                    these new ideas. This is how unfettered human advancements
                    go as far as I can tell. There's a healthy dose of Wild West,
                    some snake oil salesmen, people trying to make a quick buck
                    and people trying to evade the current system of order. But,
                    there are many beautifully minded and highly intelligent people
                    working in this space, they see the value and potential that
                    can be added to humanity.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>

    <Card className="my-3">
        <Card.Body>

            <Card.Text>
                <Card.Title>Participation</Card.Title>
                <p className="text-justify">
                    We can potentially use these tools to solve some of our most complex problems in
                    a more balanced, fair and democratic process. So jump on in,
                    the water is a bit turbulent now but the more people, the stronger
                    and more stable these new systems become by increasing the
                    network effect simply through participation. I'll do my best
                    help you navigate the turbulence.
                </p>
            </Card.Text>

        </Card.Body>
    </Card>
    </>
        );
}

export default Home;
