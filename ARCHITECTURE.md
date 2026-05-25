# Meteo24 Platform Architecture

**Foundational Strategy and System Design Document**

*Version 1.0 — Current Reality and 3-Year Horizon*

---

## Document Purpose

This document is the single foundational reference for the Meteo24 platform. It defines what Meteo24 is, what it is not, who governs which part of it, how it is built, and how it grows. Every future engineering decision, franchise agreement, brand partnership, and funding conversation should be traceable back to this document.

It is written to be readable by six audiences without losing precision for any of them: the Meteo24 engineering team, future franchise partners, brand and sponsor partners, the non-profit board that stewards the brand, country-level civil protection authorities, and international development funders.

When the platform evolves, this document is updated. It is the contract between everyone who builds on Meteo24 and the principles that hold the platform together.

---

## 1. Mission

Meteo24 is public-safety-grade information infrastructure delivered through 24/7 television, designed to operate in any country and at any scale. It exists to make weather, environmental, and emergency information universally available, instantly understood, and locally relevant — and to do so reliably enough that, where governments choose, Meteo24 can serve as critical alert infrastructure for the populations it reaches.

The channel is already on air. The platform exists today as a working operation broadcasting through Magti and Silk IPTV in Georgia, with franchise development planned for Yerevan, Baku, Kyiv, Tallinn, and a long-term horizon of more than thirty channels worldwide.

## 2. What Meteo24 Is, and What It Is Not

Meteo24 is a media platform with the operational standards of safety infrastructure. It treats viewers as users of a service, not as passive consumers of broadcast. Its core innovation is the integration of three layers that have historically been separate: linear broadcast television, a low-latency phone-based companion application, and a commerce broker that connects brands to viewers through the trust the platform has earned.

Meteo24 is not a weather aggregator. Many websites and apps already report weather. Meteo24 is differentiated by being a continuous broadcast presence in viewers' homes, with a phone-side companion that makes every broadcast moment personalizable.

Meteo24 is not an emergency alert system at the time of writing. It is built to standards that allow it to become one in any country where a government chooses to designate it as such. The path to that designation is earned through demonstrated capability in weather, air quality, earthquake, and public utility alerts — the categories where data and infrastructure are already in hand. Each capability proven becomes evidence in the conversation with the next country's civil protection authority.

Meteo24 is not a retailer, a marketplace operator, or a payment processor. It does not hold inventory. It does not take custody of customer funds. It brokers attention between viewers and partners who fulfill, ship, charge, and support on their own infrastructure.

## 3. Principle Zero

These principles are inviolable. Every feature, partnership, and design decision is tested against them. A proposal that violates any one of these is rejected regardless of its commercial appeal.

1. **Public safety is sacred.** Emergency, hazard, and safety information takes precedence over every other surface of the platform at all times. Commerce never interrupts safety. Safety always interrupts commerce.

2. **The HTML is not the moat.** The competitive defensibility of Meteo24 is the viewer database, the partner relationships, the operational reliability, the brand trust, and the platform itself. Source code can always be copied; relationships and operations cannot.

3. **Meteo24 brokers attention. It does not hold inventory or process payments.** Fulfillment, payment, and customer service are partner responsibilities. The platform operates lean, scales fast, and avoids the categorical risks of retail.

4. **Viewer data lives with the non-profit steward.** The platform's viewer database is governed under the strongest applicable privacy regime in any jurisdiction it operates in. The commercial operator accesses anonymous aggregates and opted-in commercial leads only. Raw viewer records are never sold, transferred, or made available to the commercial layer.

5. **One platform, many channels.** The codebase is unified. Every country runs the same software with different configuration. There is no Tbilisi version of the code separate from the Yerevan version. Localization is data; the code is shared.

6. **Patient habit-building. Trust before commerce.** Viewers are taught what scanning means before they are asked to transact. Useful, personal, location-aware experiences come first; commercial offers follow only after the viewer has scanned many times and never been let down.

7. **Authenticated alert sources only.** When the platform delivers emergency or hazard information, that information comes from cryptographically verifiable sources whose authority can be audited. The platform never originates or amplifies unverified alerts.

8. **No casino mechanics on the public broadcast.** Games of pure chance, randomized prize reveals, and similar gambling-pattern mechanics are not used on the public-broadcast surface of Meteo24. Skill-based, knowledge-based, and participatory mechanics are permitted. This protects the public-safety brand from categorical conflict and preserves the platform's standing as a candidate for civil protection partnership.

## 4. The Five-Layer Architecture

The platform is organized into five layers. Each has a defined role, owner, and standard of governance. The boundaries between layers are deliberate and architectural; they exist to make the system safe, scalable, and intelligible.

### Layer 0 — Public Safety Foundation

The platform's commitment to operating as critical safety infrastructure. This layer is not yet a deployed product in its full form; it is a standard against which the platform is built and continuously hardened. It governs the technical and operational requirements that allow Meteo24, in any country, to be considered as a partner in emergency alert distribution.

Components include authenticated ingestion of alerts from official sources such as national meteorological services, seismic monitoring agencies, environmental authorities, and utility operators. Redundant broadcast infrastructure with documented failover. Immutable audit logs of every alert that fires or fails to fire. An override mechanism by which any incoming high-severity alert immediately preempts every other surface of the channel. A reliability standard measured in uptime and end-to-end alert latency.

The low-latency delivery path runs through the viewer phone application rather than the broadcast chain. IPTV delivery operates at up to thirty seconds of latency from the production stack to the viewer's television. For most informational broadcasting this is invisible; for life-safety alerts it is unacceptable. The phone application receives push notifications in real time, in parallel to the broadcast. The phone alerts first; the television confirms thirty seconds later. This architectural choice is the strategic reason the phone application exists.

Layer 0 is governed by the non-profit steward.

### Layer 1 — Broadcast

The 24/7 linear television channel as viewers experience it. Weather, air quality, ultraviolet index, sunrise and sunset, severe weather warnings, regional and international news, lifestyle content, sponsored carousels, brand placements, coupons, and other content rendered through OBS Studio as the broadcast engine.

The production stack flows from OBS through the ATEM Mini Pro switcher into the Athensa playout system, which multiplexes to the IPTV providers. All on-air visuals are HTML files loaded as OBS Browser Sources, rendered locally on the production machine and treated by the channel architecture as a web application that happens to broadcast.

Layer 1 is operated by the commercial operator. Editorial standards for safety content are governed by the non-profit steward.

### Layer 2 — Viewer Application

The phone-side companion to the broadcast. A Progressive Web Application built on Supabase, accessible by scanning any QR code displayed on the channel. The viewer's first scan registers them silently with a unique anonymous hash; every subsequent scan recognizes them instantly and personalizes the experience without friction. The application stores the viewer's location, language, alert subscriptions, scan history, badges, and preferences.

The viewer database that accumulates inside this layer is the most strategically valuable asset the platform will ever build. It is the persistent identity layer that converts the ephemeral act of watching television into a continuous relationship with a service. It is also the low-latency delivery path for emergency alerts described in Layer 0.

Layer 2 is owned and governed by the non-profit steward. The commercial operator accesses only anonymized aggregates and explicitly opted-in commercial leads.

### Layer 3 — Commerce Broker

The marketplace, advertising, and revenue layer of the platform. The commerce broker is a software system with three classes of authenticated users: platform operators, country-level franchise partners, and brand partners.

Brand partners log in to their own scoped portal. They upload products, listings, offers, coupons, or affiliate links. They choose the commercial model for each item: paid media placement, lead capture, coupon redemption, affiliate deep link, or instant bank-QR purchase. They see real-time analytics on scan volume, geographic distribution, time-of-day patterns, and conversion attribution. They never see other partners' data.

Country-level franchise partners onboard local brands, configure local data sources, and operate the day-to-day editorial of their channel. Platform operators govern the entire system, manage cross-country standards, and run the franchise network.

The commerce broker does not hold inventory or process payments. Payment is handled by per-country bank-QR providers — Keepz.me and Flitt in Georgia; the equivalent providers in each country the platform operates in. The bank-QR provider is a configuration slot in the platform; the actual money flow is between the viewer's bank and the brand's bank, with the platform settling its commission separately. Fulfillment is the brand's responsibility. Customer service is the brand's responsibility. The platform's role is the broker of attention, the generator of attributed leads, and the operator of the analytics surface.

Layer 3 is operated by the commercial operator.

### Layer 4 — External Partners

The outside world that the platform plugs into. Brands hold inventory. Banks process payments. Telegram closes complex sales through conversational bots. Affiliate partners run their own checkout and fulfill their own orders. Ticketing platforms operate their own systems and receive deep links from the platform. Government civil protection authorities, where partnerships are in place, are the authoritative sources of emergency alerts.

Layer 4 is not owned by Meteo24. The platform's architectural job is to make each external partner a clean, replaceable, per-country plug-in rather than a hardcoded dependency. Layer 4 is also where the franchise model derives its scalability: a new country is not new code, it is new partners populating known slots.

## 5. The Trojan Horse: From Weather to Public Safety Infrastructure

Meteo24's growth strategy operates on a deliberate sequence. The platform enters a country as a weather and environmental broadcasting service, accumulates demonstrated competence over months and years, and, in countries where the opportunity exists, becomes the natural partner for official emergency alert distribution.

The progression is not theoretical. Every category of alert that the platform delivers before a formal EAS designation builds the case for it. Earthquake notifications come from seismic monitoring services; the platform proves it can deliver them reliably and at scale. Air quality alerts come from environmental authorities; the platform proves it can localize them by neighborhood. Public utility alerts — water shutoffs, electricity outages, gas disruptions — come from infrastructure operators; the platform proves it can broadcast them with appropriate urgency without causing panic. Severe weather warnings come from national meteorological services; the platform proves it can sustain alert delivery during the events when it matters most.

By the time a country's civil protection authority considers whom to partner with for broader emergency alert distribution, Meteo24 has already accumulated years of operational evidence. The platform is not asking to be trusted; it is producing the audit trail that earns trust.

This strategy is the reason Principle Zero exists. The behavior of the platform between alerts determines its eligibility to deliver them. A channel that runs casino mechanics in the morning will not be invited to deliver shelter-in-place orders in the afternoon. A channel that has been visibly dignified, reliable, and useful for thousands of hours becomes the obvious choice.

The economic logic of this strategy is also worth stating directly: the franchise network is built on commercial revenue from brand partnerships, viewer-facing commerce, and sponsor placements. That revenue funds the operational reliability that earns public safety designations. Commerce stability funds public safety credibility, and public safety credibility deepens the channel's trust, which in turn makes its commercial surfaces more valuable. Each layer pays for the next.

## 6. The QR Code Vocabulary

The QR code is the platform's universal verb. Every interactive moment on the channel is mediated by a QR code, and every QR code carries the same structured payload regardless of what it does. The payload contains, at minimum, the channel identifier, the segment identifier, the location context, the sponsor identifier where applicable, the timestamp, and a unique hash that makes every scan individually traceable.

QR codes on the platform express one of five intents. The intent is encoded in the payload and determines what happens when the viewer scans.

**Personalize.** The viewer sees a broadcast moment that is general, and scans to receive the same information localized to where they are. The television shows Tbilisi weather; the viewer in Batumi scans and sees Batumi weather on their phone. This intent is the entry-level vocabulary the platform teaches every viewer. It is useful, low-friction, and trust-building.

**Subscribe.** The viewer opts in to receive future content, alerts, or notifications. Air quality alerts for their neighborhood; severe weather warnings for their region; daily forecast summaries; earthquake notifications. The Subscribe intent is the mechanism by which the platform builds its low-latency alert delivery base over time.

**Participate.** The viewer contributes to the channel. Submits a photo of the current sky from their location; votes on a forecast; reports a local hazard observation; tags a citizen weather report. The Participate intent generates content the channel rebroadcasts and analytical signal that improves the channel's understanding of regional conditions.

**Transact.** The viewer engages with a commercial offer. Buys a product through a bank-QR payment; redeems a coupon; books a service. Transactions complete on partner infrastructure; the platform records the attribution and settles its commission.

**Convert deeper.** The viewer expresses interest in a complex commercial offer that cannot close in a single tap. A car, a property, an insurance product, a high-value purchase. The scan opens a Telegram conversation pre-populated with context, and a sales agent picks up the conversation. The platform captures and attributes the lead.

A single platform-wide QR vocabulary is non-negotiable. Viewers learn one behavior — scan and trust that something useful will happen — and that learning compounds across every segment, every channel, and every country. Fragmenting the vocabulary into per-vertical QR systems would destroy the network effect that makes the platform valuable.

## 7. Governance: Non-Profit Steward and Commercial Operator

The platform is operated under a two-entity structure designed to align mission with commerce while keeping each accountable to its own standard.

The non-profit steward holds the brand, governs the editorial and safety standards, owns the viewer database, and represents the platform in conversations with governments, multilateral institutions, and development funders. Its accountability is to mission: public safety, information access, viewer privacy, and the long-term integrity of the platform as a trustworthy presence in the countries it serves.

The commercial operator builds and runs the platform technology, operates the broadcast and production infrastructure, develops and maintains the commerce broker, onboards and supports brand partners, and generates the revenue that sustains the operation. Its accountability is to operational excellence: uptime, reliability, partner success, and financial sustainability.

The relationship between the two is contractual and explicit. The commercial operator provides infrastructure and services to the non-profit steward under defined terms; the non-profit steward licenses brand and editorial standards to the commercial operator under defined terms. The viewer database belongs to the steward, in the steward's legal jurisdiction, and the operator accesses it only through agreed interfaces and only for the purposes the steward has approved.

This structure is the platform's answer to the recurring conflict in media businesses between mission and revenue. Other channels resolve it by compromising one for the other. Meteo24 resolves it by separating the two into distinct legal entities with distinct accountability, each protecting the platform from the other's worst incentives.

## 8. Franchise Replication Model

A new country comes online not as a fork of the codebase but as a configured instance of the platform. The franchise package consists of six elements.

Branded broadcast scene templates configured to the franchise's language and visual identity. The same HTML widget files used across the network, with the franchise's logo, color accents, and typography choices applied through configuration.

A scoped account in the platform's admin panel, with permissions that allow the franchise to manage its own channel, brands, and content without visibility into other countries.

A configuration file declaring the franchise's data sources: which weather API, which air quality stations, which earthquake monitoring service, which alert authority feeds, which bank-QR provider, which Telegram bot instance, which affiliate networks, which language and timezone defaults.

A starter list of local brand partners that the franchise commits to onboarding in its first quarter of operation, with the platform's support and templated agreements.

An operations training program covering channel uptime, alert handling protocols, brand onboarding workflows, viewer support standards, and the use of the analytics dashboard.

A license agreement defining brand standards, revenue share terms, reliability commitments, the franchise's responsibility for its own government and civil protection relationships, and the conditions under which the franchise can claim Meteo24 affiliation.

The franchise launch process is approximately thirty days when these elements are in hand. Five of the six elements are documents, configurations, and agreements; only the broadcast scene templates require any technical handoff, and they are templates rather than custom code.

The franchise is responsible for its own civil protection relationship in its country. The platform provides the technical capability and the operational standards; the franchise builds the local government relationship that determines whether and how the platform will be used for emergency alert distribution in that country.

## 9. Technical Infrastructure

The platform's infrastructure is organized around the principle that the broadcast HTML is the thinnest possible rendering layer, and that valuable logic, data, and authentication live behind the platform's own backend.

The HTML widget files are served from version-controlled hosting connected directly to the platform's source repository. The current arrangement — files hosted on a consumer file-sharing service and pulled by OBS over public links — is replaced. Files are served from a properly configured hosting provider with HTTPS, version control, automatic deployment from the source repository, and token-based access control that allows authorized production machines to load the files while denying public access. The recommended target is Cloudflare Pages connected to the platform's private GitHub repository, with token protection layered on top.

Widgets fetch data from a single platform backend rather than calling upstream APIs directly. The backend handles authentication to weather providers, air quality networks, alert authorities, and other data sources. It applies the platform's data transformations, caching, and normalization. It returns clean structured data to the widget. A copy of the rendered HTML, in this arrangement, reveals only the existence of a backend endpoint, not the data sources or logic behind it. The platform's intelligence is protected by an authentication layer the widget cannot leak.

The viewer application is a Progressive Web App built on Supabase, hosted at a short memorable domain. The PWA handles viewer identity, location, language detection, alert subscription, scan history, and the rendering of the personalized version of every broadcast widget. Viewer data resides in the steward's legal jurisdiction.

The admin panel is the central nervous system of the platform. It is where channels are configured, brands are onboarded, products are uploaded, sponsorship slots are sold, analytics are surfaced, alerts are authored and reviewed, and franchise partners manage their operations. The admin panel implements the three-class permission model defined in Layer 3.

The bank-QR adapter is a per-country configuration that connects the platform to the local payment-QR provider. Keepz.me and Flitt are the current adapters for Georgia. Each new country adds its own adapter without changing the rest of the platform.

The Telegram integration provides conversational fulfillment for complex commercial offers and a parallel notification channel for viewers who prefer chat-based interaction over the PWA. Telegram is a supplementary channel; the PWA is the primary identity and notification layer.

## 10. The Eighteen-Month Roadmap

The platform's near-term development is sequenced to make every quarter's work the foundation of the next quarter's opportunity.

The first ninety days are devoted to foundation. Move HTML hosting off the consumer file service and onto a properly configured deployment pipeline. Establish the platform backend that mediates between widgets and upstream data sources. Stand up the first version of the Supabase-backed viewer application with the universal QR landing experience. Deploy the first version of the admin panel scoped to Meteo24 Georgia. Pilot the universal personalization intent — the Tbilisi-to-Batumi pattern — as the platform's first interactive vocabulary on a small number of segments.

The following quarter introduces the Subscribe intent at scale. Viewers can opt in to weather and air quality alerts for their neighborhood, delivered through the PWA's push notifications. The first earthquake alert integration goes live, sourcing from authoritative seismic data. The platform begins accumulating its viewer subscription base as the foundation of its low-latency alert delivery capability.

The third quarter brings the commerce broker to first revenue. Brand partners are onboarded through the admin panel. The first commercial QR placements run on the channel: media placements first, lead capture second, coupon mode third. The bank-QR adapter for Keepz and Flitt is integrated, enabling instant payment for selected commerce categories. Telegram conversational fulfillment is deployed for high-value verticals.

The fourth quarter formalizes the franchise replication kit. The configuration model, admin panel multi-tenancy, branded scene templates, and partner training program are productized. The first conversations with franchise partners in target countries begin in earnest, supported by working evidence of the Georgia operation.

The second year is devoted to franchise expansion, deeper commerce verticals, and the formal pursuit of civil protection partnerships in any market where the operational record supports it. The platform aims to be operating in at least three countries by the end of year two, with the EAS conversation actively underway in the country where the relationship is most mature.

The platform's pace is deliberately patient. It is more important to be reliable, dignified, and trustworthy in the markets it serves than to be present in many markets where its operational integrity cannot be guaranteed.

## 11. Risks and What Kills Us

A founding document is incomplete if it does not name the threats clearly enough that the team can act on them.

Single point of failure on broadcast infrastructure. A failed OBS machine, a failed switcher, a failed playout system. The platform's commitment to operating as safety infrastructure requires redundant production, monitored uptime, and documented failover procedures. The current single-machine production setup is acceptable for the platform's current scale but is replaced as the platform's operational ambitions grow.

Brand-safety collision between commerce and public safety. A commercial placement that runs during an active emergency. A sponsored segment that contradicts a safety message. A celebrity advertisement that becomes inappropriate after a tragedy. The platform's override architecture, editorial protocols, and pre-broadcast review processes are designed to prevent these collisions, but the risk requires constant vigilance.

Viewer data breach. The viewer database is the platform's most valuable asset and a target for both criminal and political interference. The steward's jurisdictional choice, the platform's encryption standards, and the operational discipline of access control are the platform's primary defenses. A breach would be catastrophic to trust; the platform invests accordingly.

Failed alert. An alert that fires when it should not, or fails to fire when it should. Both failure modes are existential to the platform's standing as a safety-grade operator. The platform's audit trail, source authentication, and operational protocols are designed to make every alert event reviewable and accountable.

Rogue franchise partner. A franchise that uses the brand for purposes the platform's principles forbid. A franchise that compromises viewer data. A franchise that allows commerce to compromise safety. The license agreement, the admin panel access controls, and the operational standards of the platform are the controls; the platform retains the right to revoke a franchise where its principles are violated.

Regulatory or political delay. Civil protection partnerships are political decisions, not technical ones. The platform may build EAS-grade capability and still be denied the partnership in a given country for reasons unrelated to its merit. The franchise model and the commercial revenue base are designed to make the platform sustainable in markets where the EAS opportunity does not materialize, so that the platform's existence is not dependent on any single government's decision.

Loss of brand integrity through commercial drift. The commercial operator's incentives, unchecked, can degrade the editorial standards that make the platform valuable. The two-entity governance structure is the architectural answer to this risk. Its effectiveness depends on the discipline of both entities to respect the boundaries the structure defines.

---

## Closing

This document defines what Meteo24 is. It does not define everything the platform will ever do, but it defines the rules by which everything the platform does will be tested.

The platform's ambition is large. The path is patient. The architecture is designed to support both, by separating what must be inviolable from what can evolve, and by making the platform's growth a matter of configuration and partnership rather than rebuilding.

Every future feature, country, partner, and capability is a candidate to extend this platform — and is subject to the principles this document establishes.

---

*Maintained in the Meteo24 source repository. Version controlled. Reviewed and updated as the platform evolves.*
