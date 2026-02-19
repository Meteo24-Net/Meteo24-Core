# 🌍 Meteo24: Open-Source Early Warning Ecosystem

![Version](https://img.shields.io/badge/version-2.0.0--beta-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Maintained by](https://img.shields.io/badge/Maintained%20by-Green%20Media%20Foundation%20(Estonia)-success.svg)

**Meteo24** is an open-source, zero-latency Early Warning System (EWS) designed to democratize disaster risk reduction (DRR). By utilizing "Cloud-to-Screen" broadcasting technology, it transforms standard TV networks, digital signage, and local PA systems into automated public safety hubs.

This project is developed and maintained by the **Green Media Foundation**, an EU-registered non-governmental organization.

---

## 🚀 The Startup Demonstration Model
Before releasing this code globally, we validated the technology in the highly seismic Caucasus region. The deployment in Georgia serves as our **startup demonstration model**. Operating 24/7 without human intervention, this pilot successfully covers 100% of the national IPTV population, proving that decentralized, open-source safety broadcasting outperforms traditional, expensive hardware infrastructure. 

*(Note: The demonstration model is used solely for technological validation and proof-of-concept for the NGO's global scaling efforts, not as a standalone commercial TV entity).*

---

## ⚙️ Core Features

* **Multi-API Aggregation:** Continuously polls global and regional data streams (USGS for seismic activity, OpenWeatherMap/Copernicus for climate, PTWC for marine hazards).
* **Zero-Latency Visual Overlays:** Uses Open Broadcaster Software (OBS) integration to render broadcast-grade graphics and dynamic lower-thirds the millisecond an alert is triggered.
* **Smart Audio Bridge (Audio Ducking):** Automatically overrides background music or ongoing broadcasts on PA systems and FM networks to deliver multi-lingual Text-to-Speech (TTS) evacuation instructions.
* **Priority Interrupt Protocol:** Automated logic hierarchy (Info Loop $\rightarrow$ Yellow Warning $\rightarrow$ Red Alert System Override).
* **Hardware Agnostic:** Runs on standard, low-cost consumer PCs (Windows/Linux) without the need for $50,000+ proprietary EAS hardware.

---

## 🏗️ Architecture Overview

The system operates on a modular architecture:
1.  **Data Ingestion Layer:** Python-based scripts listening to WebSockets and REST APIs.
2.  **Logic Engine:** Evaluates thresholds (e.g., Earthquake > 4.5 MAG) and triggers state changes.
3.  **Output Layer (Visual & Audio):** Communicates with OBS WebSocket to change scenes and triggers the Audio Bridge for PA system override.

---

## 📂 Repository Structure (Planned)

```text
Meteo24-Core/
│
├── /src/                 # Core logic scripts (Python/Node.js)
│   ├── api_listeners/    # Scripts for USGS, Weather APIs
│   ├── audio_bridge/     # Audio ducking and TTS scripts
│   └── obs_controller/   # OBS WebSocket integration
│
├── /overlays/            # HTML/CSS/JS templates for OBS browser sources
├── /docs/                # Deployment guides and technical documentation
├── /tests/               # Unit testing for API triggers
├── LICENSE               # MIT License
└── README.md             # Project overview
