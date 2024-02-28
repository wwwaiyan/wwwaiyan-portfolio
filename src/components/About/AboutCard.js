import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          As a DevOps Engineer at HQS Co., Ltd, 
          I collaborate with software developers to ensure that development follows established processes and works as planned. 
          I containerize applications using various technologies and host them on cloud or on-premises servers, 
          configure and maintain databases, and set up high availability solutions. 
          I also monitor, log, and alert the system performance using the Elastic Stack, 
          and draw diagrams for system design and infrastructure.
          I have multiple certifications in Linux, GitOps, and AWS, which demonstrate my proficiency and passion for DevOps. 
          I have over a year of experience as a Support Engineer at ATG Systems, where I provided on-site customer support 
          and contributed to the enhancement and maintenance of the infrastructure network and system components. 
          I am motivated by learning new skills, solving problems, and delivering quality solutions that meet the needs 
          and expectations of the customers and the organization.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
