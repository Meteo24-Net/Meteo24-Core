# Contributing to Meteo24

First off, thank you for considering contributing to **Meteo24**! 🌍

The Green Media Foundation is building this Early Warning System (EWS) as a Digital Public Good. By contributing your code, translations, or disaster risk reduction (DRR) expertise, you are directly helping to build climate-resilient communities worldwide.

## How Can I Contribute?

### 1. Reporting Bugs
If you find a bug (e.g., an API listener failing, or an OBS WebSocket disconnect), please open an issue on GitHub. Include:
* Your operating system and OBS version.
* The exact error logs from the console.
* Steps to reproduce the behavior.

### 2. Suggesting Enhancements
We are always looking to integrate new hazard APIs (e.g., flood sensors, air quality monitors) and improve the Smart Audio Bridge. If you have an idea, open an "Enhancement" issue to discuss it with the core team before writing code.

### 3. Localization & Translations
Disasters don't speak a single language. We need help translating our Text-to-Speech (TTS) alerts and on-screen graphical lower-thirds into as many languages as possible. Check the `/docs/localization` folder for existing language templates.

## Pull Request Process

1. **Fork the repo** and create your branch from `main`.
2. **Name your branch** descriptively (e.g., `feature/add-tsunami-api` or `bugfix/audio-ducking-crash`).
3. **Test your code:** Ensure your changes do not break the existing OBS WebSocket connection or API polling loops.
4. **Update documentation:** If you add a new feature, update the `README.md` and the `.env.example` file if new API keys are required.
5. **Submit your PR:** Provide a clear description of the problem you've solved. 

## Code of Conduct
By participating in this project, you agree to abide by our Code of Conduct. We are a global, inclusive community. Harassment or exclusionary behavior is not tolerated. Let's work together to build technology that saves lives.

*— The Green Media Foundation Team (Estonia)*
