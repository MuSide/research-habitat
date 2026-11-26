# Research Habitat

**A playful, data-backed academic field explorer.**

Research Habitat is a bilingual EN / zh-CN web toy. Ten questions match a visitor's research preferences with ten fields, then combine the result with a curated ICLR 2022–2025 OpenReview snapshot, representative review excerpts, and a downloadable share card.

## Local development

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

The production base path is `/research-habitat/`, targeting `https://muside.github.io/research-habitat/`. The app has no backend, runtime API, account, or online LLM dependency.

OpenReview statistics are directional, hand-curated field slices rather than live acceptance predictions. Review excerpts remain the opinions of their original anonymous reviewers.

**A μSide project.**  
Made on the μSide.
