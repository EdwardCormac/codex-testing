# Roguelite Loop

An editorial, static directory for roguelike and roguelite games playable on Nintendo Switch.

## Run it

```sh
npm install
npm run dev
```

For a production build, run `npm run build`. Astro emits a fully static site to `dist/`, including a generated XML sitemap.

## Included MVP

- Editorial homepage with discovery routes for short runs, co-op, deckbuilding, and action.
- Six structured starter game records; Astro creates one static page per game.
- Genre hubs, local co-op feature hub, and an editorial short-runs collection.
- Canonical metadata, Open Graph metadata, `VideoGame` / `ItemList` JSON-LD, sitemap, and `robots.txt`.
- Responsive dark-editorial visual system with zero client-side framework dependency.

## Content model

Add or update games in `src/data/games.ts`. Each record contains the editorial verdict, gameplay facts, tags, and the colour used by its cover treatment. Adding a game automatically produces `/games/<slug>/` at build time.

`astro.config.mjs` currently uses `https://rogueliteloop.com` as the production site URL. Update it before deployment if the final domain differs.
