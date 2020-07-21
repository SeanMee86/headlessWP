import React from "react"
import Layout from "../components/layout"
import {
    Container,
    Row,
    Col,
    Button, Image
} from "react-bootstrap";
import homePageStyles from './index.module.scss'
import section2Img from '../../src/images/shutterstock_796803448.jpg';
import section3Img from '../../src/images/shutterstock_110078714.jpg';
import section4Img from '../../src/images/shutterstock_1461133610.jpg';
import section5Img from '../../src/images/shutterstock_1150248683.jpg';
import section6Img from '../../src/images/Sharma-Dallas-768x768.jpg';
import section7Img from '../../src/images/shutterstock_725747446.jpg';
import GravityForm from "../components/gravity-form/gravity-form";

const IndexPage = () => {
    return (
        <Layout>
            <Container fluid className={`${homePageStyles.section1} ${homePageStyles.genericSection}`}>
                <Container>
                    <Row>
                        <Col lg={5} className={homePageStyles.text}>
                            <h1>Dedicated to you, focused on beating your cancer.</h1>
                            <p>The Verdi oncology team is 100% focused on beating your cancer. We are your dedicated advocate and “quarterback” for personalized and innovative cancer treatments—built on a long-standing tradition of respect and compassion every step of the way.</p>
                            <Button variant={'primary'} className={homePageStyles.mainBtn} href="/contact-us">Request an Appointment</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Why Verdi?</p>
                            <h2>Get from diagnosis to treatment faster.</h2>
                            <p>When you or your loved one is faced with a cancer diagnosis, time is of the essence. Cancer does not stand idly by waiting for a treatment plan or insurance to process. With Verdi, you get:</p>
                            <ul>
                                <li>processing for faster diagnosis and treatment</li>
                                <li>Navigator for time-sensitive studies and pre-authorizations</li>
                                <li>Compassionate and attentive staff who treat patients like family</li>
                                <li>Concierge medicine level access to your Verdi oncologist</li>
                                <li>Financial counseling and copay assistance programs</li>
                            </ul>
                            <p><Button variant={'primary'} className={homePageStyles.secondaryBtn} href="/personalized-care/about-us">Learn more about Verdi</Button></p>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <Image src={section2Img} fluid/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={`${homePageStyles.genericSection} ${homePageStyles.breakSection}`}>
                <Container>
                    <Row>
                        <Col>
                            <h2>They truly care about their patients. My husband had stage 4 non-Hodgkin’s large cell lymphoma. It’s been 12 years now, and doing great. Thanks Verdi and God.</h2>
                            <h2>– Dorothy B.</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={homePageStyles.lightBack}>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Personalized Care</p>
                            <h2>Get tailored care for the person, not just the disease.</h2>
                            <p>We provide value-based care, a patient-centered approach to improving quality and outcomes–not the quantity of cases being treated. That means going beyond the NCCN (National Comprehensive Cancer Network) basic guidelines in oncology. That means outsmarting your cancer and thinking outside of the traditional protocol with novel agents and therapeutic modalities appropriate for the individual.</p>
                            <p><Button variant={'primary'} className={homePageStyles.mainBtn} href="/personalized-care">Discover Why Personalized Care Matters</Button></p>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <Image src={section3Img} fluid/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <Image src={section4Img} fluid/>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Access to advanced treatment options</p>
                            <h2>Access to advanced technological options.</h2>
                            <p>In cases where the individual’s cancer leaves them without many conventional options, our oncology specialists have the academic and clinical expertise to explore every possible avenue, from targeted, novel therapies and immunotherapy to clinical trial opportunities—to put in place more effective, and often less toxic, treatment strategies.</p>
                            <p><Button variant={'primary'} className={homePageStyles.secondaryBtn} href="/treatments">Learn More About Treatment Options</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={homePageStyles.lightBack}>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Who we help</p>
                            <h2>Find new hope for more time and a higher quality of life.</h2>
                            <p>The Verdi Cancer & Research Center of Texas offers a wide range of comprehensive cancer services to non-pediatric patients with soft-tissue cancers, all supported by a network of surgeons, referring physicians, and other specialists. These network centers of excellence streamline costs while also providing unique access to a research base of progressive technologies and treatments.</p>
                            <p><Button variant={'primary'} className={homePageStyles.mainBtn} href="/cancers">Can You Help with My Specific Cancer?</Button></p>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <Image src={section5Img} fluid/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter} style={{textAlign: "center", fontSize: "18px"}}>
                            <Image src={section6Img} fluid style={{maxWidth: "370px", display: "block", margin: "10px auto"}}/>
                            <p>“We want our patients to feel as if they were being taken care of by a family member.”</p>
                            <p>– Jivesh Sharma, M.D.</p>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Who we are</p>
                            <h2>Experienced, compassionate specialists committed to defeating your cancer.</h2>
                            <p>Our medical oncology doctors are well known in the community and have a long-standing reputation for innovative, targeted treatment and a heart as big as Texas. In fact, they are often referred to by physicians for their own families near and far, from the Dallas/Fort Worth surrounding communities as well as a large swath of rural East Texas.</p>
                            <p><Button variant={'primary'} className={homePageStyles.secondaryBtn} href="/our-team">Meet Our Team</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={homePageStyles.lightBack}>
                <Container className={homePageStyles.genericSection}>
                    <Row>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <p>Financial Assistance</p>
                            <h2>Helping reduce your costs with financial assistance.</h2>
                            <p>We work with our patients and their families to help reduce out-of-pocket costs by applying for financial assistance programs and to cancer foundations. We can also help facilitate financial assistance for deductibles, copays or temporary loss of insurance.</p>
                            <p><Button variant={'primary'} className={homePageStyles.mainBtn} href="/financial">More About Financial Assistance</Button></p>
                        </Col>
                        <Col lg={6} className={homePageStyles.verticalCenter}>
                            <Image src={section7Img} fluid/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className={`${homePageStyles.contactSection}`}>
                <Container>
                    <Row>
                        <Col lg={{span: 6, offset: 3}} className={homePageStyles.formContainer}>
                            <h2>Contact Us</h2>
                            <GravityForm/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Layout>
    )
}

export default IndexPage
