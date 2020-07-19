import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import footerStyles from './footer.module.scss';

const Footer = () => {
    return (
        <>
            <Container>
                <Row className={footerStyles.footerTextRow}>
                    <Col className={footerStyles.footerText}>
                        <p>VERDI CANCER & RESEARCH CENTER OF TEXAS</p>
                        <p>7777 FOREST LN</p>
                        <p>SUITE B-242</p>
                        <p>DALLAS, TX 75230</p>
                        <p>P: 214-739-1706</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
