import React from "react"
import Layout from "../components/layout"
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap";
import homePageStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Container fluid className={homePageStyles.section1}>
                <Container>
                    <Row>
                        <Col lg={5} className={homePageStyles.text}>
                            <h1>Dedicated to you, focused on beating your cancer.</h1>
                            <p>The Verdi oncology team is 100% focused on beating your cancer. We are your dedicated advocate and “quarterback” for personalized and innovative cancer treatments—built on a long-standing tradition of respect and compassion every step of the way.</p>
                            <Button variant={'primary'} className={homePageStyles.mainBtn}>Request an Appointment</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </Layout>
    )
}

export default IndexPage
