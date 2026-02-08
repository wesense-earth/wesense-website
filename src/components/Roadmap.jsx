import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const roadmapPhases = [
  {
    phase: 'Phase 1: Core Pipeline',
    status: 'In Progress',
    badgeClass: 'bg-brand',
    description: 'Building the core data pipeline, from sensor ingestion to storage.',
    items: [
      { text: 'Sensor Firmware & Data Ingestion', done: true },
      { text: 'MQTT Hub with 5-min Normalization', done: true },
      { text: 'Proof of Concept Frontend (Sensor Map)', done: true },
      { text: 'ClickHouse Database Setup', done: false },
      { text: 'Data Ingester Service', done: true },
      { text: 'LoRaWAN Sensors (Firmware)', done: true },
      { text: 'TTN → Ingester Integration', done: false },
      { text: 'Protobuf Decoder', done: true },
    ],
  },
  {
    phase: 'Phase 2: Decentralized Archiving',
    status: 'Next Up',
    badgeClass: 'bg-brand-light',
    description: 'Creating permanent, immutable archives on the decentralized web.',
    items: [
      { text: 'Daily Archiving Script (Parquet Export)', done: false },
      { text: 'IPFS Node Setup', done: false },
      { text: 'OrbitDB Registry (Hubs, Ingesters, Archives)', done: false },
      { text: 'Archive Integration with P2P Stack', done: false },
    ],
  },
  {
    phase: 'Phase 3: Live P2P Distribution',
    status: 'Planned',
    badgeClass: 'bg-brand-light',
    description: 'Real-time data distribution via peer-to-peer network.',
    items: [
      { text: 'libp2p pub/sub Integration', done: false },
      { text: 'OrbitDB Registry for Ingesters', done: false },
      { text: 'Topic-based Subscriptions', done: false },
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
          We are building in public, with a clear path toward a fully decentralized, community-owned network.
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
