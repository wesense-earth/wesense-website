# WeSense Documentation

Welcome to the WeSense documentation. Whether you want to contribute sensor data, run a station, write code, or build hardware — there's a guide for you.

## Contribute Sensor Data (Start Here)

The most valuable thing you can do is place a sensor somewhere and contribute data. No coding required.

- [Recommended Sensors](getting-started/recommended-sensors.md) — What to buy, with a focus on long-term reliability
- [Build a WeSense Node](getting-started/build-wesense-node.md) — ESP32 WiFi sensor, reports every 5 minutes
- [Meshtastic Node](getting-started/meshtastic-node.md) — Add environmental sensors to a Meshtastic device
- [Meshtastic Gateway](getting-started/meshtastic-gateway.md) — Bridge your local mesh to the internet
- [Home Assistant / Ecowitt](getting-started/home-assistant.md) — Connect sensors you already own
- [Firmware Updates](getting-started/firmware-update.md) — Keeping your sensor up to date

## Run a Station

Help keep data safe by running a WeSense station on a Raspberry Pi or home server.

- [Operate a Station](station-operators/operate-a-station.md) — Full setup guide
- [Deployment Profiles](station-operators/deployment-profiles.md) — Which profile is right for you
- [Contribution Tiers](station-operators/contribution-tiers.md) — From sensor operator to data guardian

## Develop

Contribute code, add new data sources, or build visualisations.

- [Architecture Overview](developers/architecture.md) — How the system works
- [Writing an Ingester](developers/writing-an-ingester.md) — Add a new data source
- [Data Schema Reference](developers/data-schema.md) — Reading types, units, payload format
- [Contributing Code](developers/contributing-code.md) — Development setup and guidelines

## Hardware

Design and build sensor hardware.

- [Board Configurations](hardware/board-configurations.md) — Supported ESP32 boards and wiring
- [Enclosure Designs](hardware/enclosure-designs.md) — 3D printable enclosures for outdoor and indoor use
- [Sensor Specifications](hardware/sensor-specs.md) — Detailed specs for supported sensors

## Use the Data

All WeSense data is free and open, forever.

- [Accessing Data](data/accessing-data.md) — Query ClickHouse, subscribe via MQTT, fetch IPFS archives
- [Why Durability Over Accuracy](data/why-durability-over-accuracy.md) — Our sensor philosophy and the evidence behind it

## About

- [Privacy Policy](about/privacy-policy.md)
- [Terms of Service](about/terms-of-service.md)
