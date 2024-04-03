import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{marginTop:"150px"}}>
    <section className="about-section text-center">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="about-heading mb-4">About Me</h2>
            <p className="about-content">
              I'm a seasoned MERN developer with over [X] years of experience in building robust web applications. My expertise lies in crafting efficient and scalable solutions using cutting-edge technologies. I have a strong passion for coding and constantly strive to stay updated with the latest industry trends.
            </p>
            <p className="about-content">
              Throughout my career, I've successfully delivered numerous projects, ranging from small-scale applications to large enterprise solutions. My proficiency includes front-end technologies like HTML, CSS, JavaScript, and frameworks such as React.js. On the back-end, I specialize in Node.js and have extensive experience with databases like MongoDB.
            </p>
            <p className="about-content">
              Apart from coding, I'm also enthusiastic about collaborating with cross-functional teams, problem-solving, and continuous learning. I believe in leveraging technology to create meaningful and impactful solutions that drive business growth.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default About;
