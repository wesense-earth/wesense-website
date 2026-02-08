import React from 'react';
import { Container } from 'react-bootstrap';

const Mission = () => {
  return (
    <section id="mission">
      <Container>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="lead" style={{ fontSize: '1.2rem', fontWeight: '300', color: 'var(--text-color)' }}>
              This project is founded on a simple but powerful idea: that to care for our planet, we must first be able to see and understand it.
              WeSense.earth is a mission to create a living, breathing, community-owned map of our environment. It transforms raw data into a shared language,
              placing the power of environmental insight into the hands of every individual, classroom, and community.
            </p>
            <hr className="my-4" />
            <p className="lead" style={{ fontSize: '1.2rem', fontWeight: '300', color: 'var(--text-color)' }}>
              By observing the air in our own homes and on our own streets, we are not just answering personal questions; we are weaving our hyper-local story into a global tapestry of understanding.
              This is a tool for collective sense-making, empowering us to drive local action, contribute to global climate science, and build a more transparent, evidence-based relationship with the world we all share.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
