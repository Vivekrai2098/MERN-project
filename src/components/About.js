import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div style={{marginTop:"150px"}}>
        <section className="about-section text-center">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Emissions</h2>
            <p className="about-content">
              Traditional cars emit greenhouse gases and pollutants that contribute to air pollution, climate change, and health problems.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Green Alternatives</h2>
            <p className="about-content">
              Explore green alternatives such as electric, hybrid, and hydrogen fuel cell vehicles to reduce emissions and minimize environmental impact.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Future of Cars</h2>
            <p className="about-content">
              The future of cars is poised for innovation and transformation.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Autonomous Vehicles</h2>
            <p className="about-content">
              Autonomous vehicles, equipped with advanced sensors and artificial intelligence, have the potential to revolutionize transportation by improving safety, efficiency, and accessibility.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Sustainable Transportation</h2>
            <p className="about-content">
              Embrace sustainable transportation solutions such as public transit, car-sharing programs, and active modes of transportation like walking and cycling.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">Conclusion</h2>
            <p className="about-content">
              Cars have evolved from simple mechanical contraptions to sophisticated machines that shape our daily lives. While they offer unparalleled convenience and mobility, they also pose environmental challenges. As we look to the future, innovation and sustainability will drive the next chapter of the automotive industry.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">FAQs (Frequently Asked Questions)</h2>
            <p className="about-content">
              <strong>What is the oldest car in existence?</strong><br/>
              <strong>Are electric cars more expensive to maintain?</strong><br/>
              <strong>How do autonomous vehicles work?</strong><br/>
              <strong>What are the benefits of car-sharing programs?</strong><br/>
              <strong>Will self-driving cars replace traditional vehicles?</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default About