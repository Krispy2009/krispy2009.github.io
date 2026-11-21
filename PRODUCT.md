# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted equally:

- **Hiring managers and founders** (CTOs, VPs of Engineering, founders) deciding whether Kristi fits an engineering leadership or senior/lead engineering role.
- **Recruiters**, in-house or agency, screening candidates and passing them on.
- **Contract clients** who need a product, feature or team built and want senior hands for a fixed-scope or ongoing engagement.

Some arrive cold (search, a shared link). Others already know Kristi from LinkedIn or a CV and come to check.

## Product Purpose

kristi.cy is the personal site of Kristi Achilleos, an engineering leader and founding engineer based in Nicosia, Cyprus. It says what Kristi does ("I build products, and the teams behind them"), shows the track record, and says Kristi is available from December 2026.

Success means two things, equally:
1. Visitors who already know Kristi leave convinced, even if they make contact somewhere else.
2. Visitors who don't know Kristi send the "Work with me" email about a role or project.

## Positioning

Kristi is a leader who still builds, hands-on from first idea to shipped product, and holds that happy engineers build the best things, so the work Kristi cares about most is helping developers grow. Accessibility has been built in from day one, and it shows in the site itself (the braille signature) as well as in what it claims.

## Operating Context

- Two pages: `index.html` (overview) and `work-with-me.html` (what Kristi is looking for, track record, stack, how to get in touch).
- Contact is by email (mailto link) and LinkedIn. There is no form.
- `llms.txt` gives AI agents and crawlers the same facts. Keep it in step with the page copy.
- Analytics: GoatCounter.
- Visitors often come from LinkedIn and recruiter messages, so many of them see the site first on a phone.

## Capabilities and Constraints

- Static HTML, CSS and vanilla JS (`styles.css`, `site.js`) on GitHub Pages at the custom domain `www.kristi.cy` (`CNAME`). **Binding: no framework and no build step.**
- Light and "chalkboard" (dark) themes with a toggle that remembers the choice in localStorage. They are part of the current site but were not made binding.
- Includes JSON-LD Person data, a sitemap, robots.txt, and a hidden console greeting for developers.
- Roles sought: engineering leadership (engineering manager, growing towards head of engineering), senior or lead engineer, and contract build engagements.

## Brand Commitments

- **Voice (binding):** warm, playful, first person. Exclamation marks and emoji are welcome. Central line: "happy engineers build the best things."
- **Braille signature (binding):** "kristi" in braille cells in the footer, with the accessibility-first stance it stands for.
- Name and domain: Kristi Achilleos, kristi.cy.

## Evidence on Hand

- Track record, as stated on the site: led the engineering team behind a product that reached £1M+ ARR (Unibuddy). Split one large team into autonomous squads with a new SDLC at Playroll: +30% development velocity, cycle time down 25%, incidents resolved 40% faster, 0% regrettable attrition. Built an AI-native platform from 0 to 1 as a founding engineer (Familiar). 10+ years across engineering, management and founding roles.
- Side projects with screenshots: Little Agenda (`images/littleagenda.png`, littleagenda.app) and Braille Buddy (`images/braille-buddy.png`).
- Design reference captures: `designs/top.png` and `designs/bottom.png`.
- **Absent, do not fabricate:** testimonials, named references, client logos, press, case-study write-ups, rates or pricing.

## Product Principles

1. **Personality is the credential.** Warmth and play show how Kristi leads. Don't sand them off into corporate polish.
2. **Show, don't claim.** Accessibility and craft should show in how the site is built, not only in what it says.
3. **Serve the skimmer and the reader.** A recruiter scanning on a phone and a founder reading closely should both get what they need.
4. **Real numbers only.** Every metric and company name must be one Kristi has confirmed.
5. **Simple to keep.** Plain static files Kristi can edit by hand.

## Accessibility & Inclusion

Accessibility is a core personal commitment, not a checkbox. At minimum: WCAG 2.2 AA, full keyboard access (skip link, visible focus), reduced-motion support, and decorative glyphs hidden from assistive tech with meaningful labels where needed. The site already uses Atkinson Hyperlegible for body text.
