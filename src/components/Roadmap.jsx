import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const roadmapPhases = [
  {
    phase: 'Phase 1: Core Pipeline',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Building the core data pipeline, from sensor ingestion to storage.',
    items: [
      { text: 'Sensor Firmware & Data Ingestion', done: true },
      { text: 'MQTT Hub with 5-min Normalization', done: true },
      { text: 'Proof of Concept Frontend (Sensor Map)', done: true },
      { text: 'ClickHouse Database Setup', done: true },
      { text: 'Data Ingester Service', done: true },
      { text: 'LoRaWAN Sensors (Firmware)', done: true },
      { text: 'TTN → Ingester Integration', done: true },
      { text: 'Protobuf Decoder', done: true },
    ],
  },
  {
    phase: 'Phase 2: Decentralized Archiving',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Creating permanent, immutable archives on the decentralized web.',
    items: [
      { text: 'Daily Archiving Script (Parquet Export)', done: true },
      { text: 'IPFS Node Setup', done: true },
      { text: 'OrbitDB Registry (Hubs, Ingesters, Archives)', done: true },
      { text: 'Archive Integration with P2P Stack', done: true },
    ],
  },
  {
    phase: 'Phase 3: Live P2P Distribution',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Real-time data distribution via peer-to-peer network.',
    items: [
      { text: 'Zenoh P2P Live Data Distribution', done: true },
      { text: 'OrbitDB Registry for Ingesters', done: true },
      { text: 'Signed Readings & Trust Verification', done: true },
      { text: 'Topic-based Subscriptions', done: true },
    ],
  },
  {
    phase: 'Phase 4: Community Growth',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'Onboarding community members to strengthen and grow the network.',
    items: [
      { text: 'Multi-Node Testing & Replication', done: false },
      { text: 'Hub Finder Webapp', done: false },
      { text: 'Operator Documentation', done: false },
      { text: 'Community Badges & Leaderboards', done: false },
      { text: 'Advanced Visualizations', done: false },
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <h2 className="section-title">Our Roadmap</h2>
        <p className="section-subtitle">
          This project has been in development since 2024 and is still considered alpha software. Most of the big blocks of work have been completed, with the focus now shifting to documentation, security, bug fixes, stability and adding support for 3rd party sensor hardware. The vision remains to build toward a fully decentralized, community-owned network that anyone can contribute to, without paywalls or judgement.
        </p>
        <Row>
          {roadmapPhases.map((phase, index) => (
            <Col key={index} lg={3} className="d-flex align-items-stretch mb-4">
              <Card className="w-100">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0" style={{ fontSize: '1rem' }}>{phase.phase}</h5>
                  <Badge pill className={phase.badgeClass}>{phase.status}</Badge>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{phase.description}</Card.Text>
                  <ul className="list-unstyled">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={item.done ? 'text-decoration-line-through' : ''} style={{ color: item.done ? 'var(--text-muted)' : 'var(--text-color)', fontSize: '0.9rem' }}>
                        <span style={{ color: item.done ? 'var(--fern)' : 'var(--text-muted)' }}>{item.done ? '✓' : '○'}</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Roadmap;
