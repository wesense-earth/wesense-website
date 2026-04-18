import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

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
      { text: 'Migrate IPFS Archives from Helia to Kubo', done: true },
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
    phase: 'Phase 4: Archive & P2P Replication',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Storage broker, Iroh archive replication, and community-driven P2P distribution.',
    items: [
      { text: 'Storage Broker with Pluggable Backends', done: true },
      { text: 'Iroh P2P Archive Replication (91K+ blobs synced)', done: true },
      { text: 'Subdivision-Level Archive Partitioning', done: true },
      { text: 'Zenoh Live P2P with Proxy Architecture', done: true },
      { text: 'OrbitDB Attestation Migration to Peer Index Exchange', done: true },
      { text: 'Community-Driven Replication Model', done: true },
    ],
  },
  {
    phase: 'Phase 5: Robustness & Security',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Hardening the P2P network for reliability, security, and real-world conditions.',
    items: [
      { text: 'Multi-Node Replication Testing (2 hosts verified)', done: true },
      { text: 'TLS Encryption for MQTT (Sensors)', done: true },
      { text: 'TLS Encryption for Internal Services', done: true },
      { text: 'Parquet Optimisation (Benchmarked, ZSTD already optimal)', done: true },
      { text: 'Contribution Tiers & Deployment Profiles', done: true },
      { text: 'Test Internet Replication via VPS (93K archives, AU↔NZ)', done: true },
      { text: 'P2P Classification Sharing Between Guardians', done: true },
      { text: 'libp2p Stream Reset & Teardown Cleanup (~30/hr → 0/hr disconnects; upstream PRs filed)', done: true },
    ],
  },
  {
    phase: 'Phase 6: Documentation & Guides',
    status: 'Complete',
    badgeClass: 'bg-brand',
    description: 'Comprehensive guides for every type of contributor, published on wesense.earth.',
    items: [
      { text: 'Recommended Sensors Guide (durability over accuracy)', done: true },
      { text: 'Build a WeSense Node (hardware, firmware, configuration)', done: true },
      { text: 'Meshtastic Node & Gateway Guides', done: true },
      { text: 'Home Assistant / Ecowitt Integration Guide', done: true },
      { text: 'Why Durability Over Accuracy (evidence-based explainer)', done: true },
      { text: 'Operate a Station Guide', done: true },
      { text: 'Contribution Tiers & Deployment Profiles', done: true },
      { text: 'Architecture Overview (public)', done: true },
      { text: 'Writing an Ingester (developer guide)', done: true },
      { text: 'Data Access & Schema Reference', done: true },
    ],
  },
  {
    phase: 'Alpha 1 Release',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'First public release, announcing the network to early adopters.',
    items: [
      { text: 'Public Announcement', done: false },
    ],
  },
  {
    phase: 'Alpha 2: Home Assistant & Onboarding',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'Lowering the barrier for everyday contributors. Home Assistant integration reaches HACS, firmware flashes from the browser, and setup guides cover the common platforms.',
    items: [
      { text: 'Home Assistant Plugin Field Testing', done: false },
      { text: 'Publish HA Plugin to HACS Community Store', done: false },
      { text: 'Web-Based Firmware Flasher (no Arduino IDE required)', done: false },
      { text: 'Deployment Guides for Common Platforms', done: false },
    ],
  },
  {
    phase: 'Alpha 3: Hardware & Networking',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'Physical and network-layer work — open hardware designs, connectivity for home users behind CGNAT, and research into alternative transport layers.',
    items: [
      { text: 'Hardware Designs & 3D Printed Enclosures', done: false },
      { text: 'DERP Relay for CGNAT/Dynamic IP Users', done: false },
      { text: 'Historical Archive Import to ClickHouse', done: false },
      { text: 'Investigate Reticulum as Transport Layer', done: false },
    ],
  },
  {
    phase: 'Alpha 4: Scale & Release Prep',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'Infrastructure hardening and the pre-Beta security audit — everything the network needs to stand up at scale under real-world scrutiny.',
    items: [
      { text: 'ClickHouse Schema Migration System', done: false },
      { text: 'Classification Delta/Diff at Scale', done: false },
      { text: 'Security Audit', done: false },
    ],
  },
  {
    phase: 'Beta 1 Release',
    status: 'Future',
    badgeClass: 'bg-brand-light',
    description: 'Stable public release once the security audit closes and the alpha series completes.',
    items: [
      { text: 'Address Audit Findings', done: false },
      { text: 'Final Release Candidate Testing', done: false },
      { text: 'Public Beta Announcement', done: false },
    ],
  },
];

const Roadmap = () => {
  const [showCompleted, setShowCompleted] = useState(false);

  const completedPhases = roadmapPhases.filter((p) => p.status === 'Complete');
  const upcomingPhases = roadmapPhases.filter((p) => p.status !== 'Complete');
  const visiblePhases = showCompleted ? roadmapPhases : upcomingPhases;

  return (
    <section id="roadmap" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <Container>
        <h2 className="section-title">Our Roadmap</h2>
        <p className="section-subtitle">
          This project has been in development since 2024 and is currently pre-alpha software. The core pipeline, decentralised archiving, live P2P distribution, archive replication, robustness hardening, and the full contributor documentation suite are now complete. Three stations across New Zealand and Australia replicate 93,000+ archives with a measured zero disconnects per hour across the P2P network. The remaining work before Beta is grouped into four focused alphas — an initial announcement, Home Assistant integration, hardware and networking, then scale and security prep. The vision remains to build toward a fully decentralised, community-owned network that anyone can contribute to, without paywalls or judgement.
        </p>
        <div className="text-center mb-4">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted
              ? `− Hide ${completedPhases.length} completed phases`
              : `+ Show ${completedPhases.length} completed phases`}
          </Button>
        </div>
        <Row>
          {visiblePhases.map((phase, index) => (
            <Col key={index} md={6} lg={3} className="d-flex align-items-stretch mb-4">
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
