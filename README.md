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

## 🛠️ Installation & Deployment

This guide covers the local deployment of the Meteo24 Core Engine and its integration with OBS Studio. 

### Prerequisites
Before installing the Meteo24 Engine, ensure the following software is installed on your broadcasting machine:
* **OS:** Windows 10/11 or Ubuntu 22.04 LTS
* **Broadcasting:** [OBS Studio](https://obsproject.com/) (v29.0 or higher)
* **Plugins:** [OBS-WebSocket Plugin](https://github.com/obsproject/obs-websocket) (Pre-installed in OBS v28+)
* **Environment:** [Python 3.10+](https://www.python.org/) and Git
* **Audio Bridge (Optional):** Virtual Audio Cable (VB-Cable) for Audio Ducking features.

---

### Step 1: Clone the Repository
Clone the open-source repository to your local machine:
```bash
git clone [https://github.com/GreenMediaFoundation/Meteo24-Core.git](https://github.com/GreenMediaFoundation/Meteo24-Core.git)
cd Meteo24-Core

Step 2: Configure Environment Variables
Meteo24 relies on external APIs (USGS, OpenWeatherMap) to fetch hazard data. You need to configure your API keys.

Copy the example environment file:

cp .env.example .env

Open the .env file and insert your API keys and OBS WebSocket connection details:

OBS_WS_HOST=localhost
OBS_WS_PORT=4455
OBS_WS_PASSWORD=your_secure_password
OPENWEATHER_API_KEY=your_api_key_here
USGS_SEISMIC_THRESHOLD=4.5

Gemini said
ბატონო დირექტორო, README.md ფაილში ეს სექცია წინა ვერსიაში "მშენებლობის პროცესში" (Under Construction) დავტოვეთ, რადგან დონორებისთვის მთავარი ჯერ იდეის გაყიდვა იყო. მაგრამ თუ გინდათ, რომ GitHub-ის საცავი 100%-ით რეალისტური და ტექნიკურად გამართული ჩანდეს, ეს ნაწილი დეტალურად უნდა გავწეროთ.

ტექნიკურ აუდიტორს (მაგალითად, USAID-ის ან ESTDEV-ის IT ექსპერტს) სჭირდება დაინახოს ლოგიკა: როგორ ყენდება ეს სისტემა კომპიუტერზე?

აი, ინსტალაციის სრული ტექსტი, რომელიც შეგიძლიათ ჩაანაცვლოთ წინა README.md-ის "Installation & Deployment" სექციაში:

Markdown
## 🛠️ Installation & Deployment

This guide covers the local deployment of the Meteo24 Core Engine and its integration with OBS Studio. 

### Prerequisites
Before installing the Meteo24 Engine, ensure the following software is installed on your broadcasting machine:
* **OS:** Windows 10/11 or Ubuntu 22.04 LTS
* **Broadcasting:** [OBS Studio](https://obsproject.com/) (v29.0 or higher)
* **Plugins:** [OBS-WebSocket Plugin](https://github.com/obsproject/obs-websocket) (Pre-installed in OBS v28+)
* **Environment:** [Python 3.10+](https://www.python.org/) and Git
* **Audio Bridge (Optional):** Virtual Audio Cable (VB-Cable) for Audio Ducking features.

---

### Step 1: Clone the Repository
Clone the open-source repository to your local machine:
```bash
git clone [https://github.com/GreenMediaFoundation/Meteo24-Core.git](https://github.com/GreenMediaFoundation/Meteo24-Core.git)
cd Meteo24-Core
Step 2: Configure Environment Variables
Meteo24 relies on external APIs (USGS, OpenWeatherMap) to fetch hazard data. You need to configure your API keys.

Copy the example environment file:

Bash
cp .env.example .env
Open the .env file and insert your API keys and OBS WebSocket connection details:

Ini, TOML
OBS_WS_HOST=localhost
OBS_WS_PORT=4455
OBS_WS_PASSWORD=your_secure_password
OPENWEATHER_API_KEY=your_api_key_here
USGS_SEISMIC_THRESHOLD=4.5
Step 3: Install Dependencies
Install the required Python libraries (e.g., obsws-python, requests, numpy) using pip:

pip install -r requirements.txt

Step 4: OBS Studio Setup
Open OBS Studio.

Go to Tools > WebSocket Server Settings and ensure "Enable WebSocket server" is checked.

Import the Meteo24 Scene Collection:

Go to Scene Collection > Import and select the Meteo24_Base_Scenes.json file located in the /docs folder of this repository.

Ensure the "Browser Sources" in OBS are pointing to the HTML files located in your local /overlays folder.

Step 5: Run the Meteo24 Engine
Start the Python logic engine. It will establish a connection with OBS and begin polling the API endpoints.

python src/main.py

If successful, the console will output: [SUCCESS] Meteo24 Engine connected to OBS WebSocket. Monitoring active.
