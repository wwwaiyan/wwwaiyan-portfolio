import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { 
  FaMedium, 
  FaHashnode, 
  FaLinkedin,
  FaGithub } from "react-icons/fa6";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               Hi there! 👋 <span className="purple"> I'm </span> Wai Yan Soe
            </h1>
            <p className="home-about-body">
              I am a passionate DevOps engineer with expertise in cloud technologies.
              My goal is to automate, streamline, and optimize development and operational 
              processes to deliver robust and scalable solutions.
              <br />
              <br />
            <h6 style={{ fontSize: "1.4em" }}>
            🔧 Technologies & Tools
            </h6>
            <ul>
              <li><b class="purple">Cloud Platforms:</b> AWS, Digital Ocean</li>
              <li><b class="purple">IaC:</b> Terraform, CloudFormation</li>
              <li><b class="purple">Containerization:</b> Docker, Kubernetes</li>
              <li><b class="purple">CI/CD:</b> Jenkins, GitHub Actions, GitLab CI</li>
              <li><b class="purple">Configuration Management:</b> Ansible</li>
              <li><b class="purple">Monitoring and Logging:</b> ELK Stack, Prometheus, Grafana</li>
              <li><b class="purple">Scripting/Programming:</b> Bash, Python</li>
            </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wwwaiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@wwwaiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@wwwaiyan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://waiyansoe.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaHashnode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
