export type Game = {
  slug: string; title: string; developer: string; year: number; genres: string[];
  players: string; runLength: string; difficulty: string; price: string;
  verdict: string; description: string; features: string[]; accent: string;
};

export const games: Game[] = [
  { slug: 'hades', title: 'Hades', developer: 'Supergiant Games', year: 2020, genres: ['action', 'story-rich'], players: '1 player', runLength: '25–40 min', difficulty: 'Adjustable', price: '$$', verdict: 'The defining action roguelite: fast, generous, and endlessly replayable.', description: 'Escape the underworld with a build that changes every run, a cast that remembers your failures, and combat that feels precise from the first room.', features: ['Short runs', 'Story-rich', 'Accessibility options'], accent: '#e8604c' },
  { slug: 'slay-the-spire', title: 'Slay the Spire', developer: 'Mega Crit', year: 2019, genres: ['deckbuilding', 'turn-based'], players: '1 player', runLength: '45–75 min', difficulty: 'Demanding', price: '$$', verdict: 'A near-perfect deckbuilder whose choices stay interesting after hundreds of climbs.', description: 'Build a deck from imperfect cards, anticipate enemy intent, and make every relic count on a climb that rewards clear thinking.', features: ['Deckbuilding', 'Turn-based', 'Deep strategy'], accent: '#89b86c' },
  { slug: 'dead-cells', title: 'Dead Cells', developer: 'Motion Twin', year: 2018, genres: ['action', 'metroidvania'], players: '1 player', runLength: '30–50 min', difficulty: 'Hardcore', price: '$$', verdict: 'Fluid combat and a giant arsenal make every run feel like a new experiment.', description: 'A kinetic action platformer with branching biomes, weapons that radically alter your approach, and a satisfying long-term mastery curve.', features: ['Action', 'Fast runs', 'Assist Mode'], accent: '#5dc5ca' },
  { slug: 'vampire-survivors', title: 'Vampire Survivors', developer: 'poncle', year: 2023, genres: ['bullet-heaven', 'action'], players: '1–4 local', runLength: '15–30 min', difficulty: 'Approachable', price: '$', verdict: 'The most approachable way to experience the “one more run” loop.', description: 'Move through a storm of monsters while attacks fire automatically and a handful of upgrades snowball into spectacular screen-clearing builds.', features: ['Local co-op', 'Short runs', 'Low pressure'], accent: '#e3bd45' },
  { slug: 'enter-the-gungeon', title: 'Enter the Gungeon', developer: 'Dodge Roll', year: 2017, genres: ['bullet-hell', 'action'], players: '1–2 local', runLength: '35–60 min', difficulty: 'Hardcore', price: '$$', verdict: 'A dense, witty bullet-hell with an enormous pile of secrets and weapons.', description: 'Dodge impossible patterns, flip tables for cover, and learn the strange interactions in a gun-filled dungeon that never plays quite the same way twice.', features: ['Local co-op', 'Bullet hell', 'Secrets'], accent: '#b37de5' },
  { slug: 'monster-train', title: 'Monster Train First Class', developer: 'Shiny Shoe', year: 2021, genres: ['deckbuilding', 'strategy'], players: '1 player', runLength: '40–65 min', difficulty: 'Adjustable', price: '$$', verdict: 'A vertical twist on deckbuilding with huge combo potential.', description: 'Defend a multi-floor train with demons, spells, and upgrades that invite you to create joyful, overpowered engines.', features: ['Deckbuilding', 'Buildcrafting', 'Challenge modes'], accent: '#e2723a' },
];

export const genreDetails = {
  action: { label: 'Action roguelites', intro: 'Reflex-led runs built around weapon feel, movement, and moment-to-moment mastery.' },
  deckbuilding: { label: 'Deckbuilding roguelites', intro: 'Thoughtful card games where each reward shapes a unique strategy.' },
  'bullet-heaven': { label: 'Bullet heavens', intro: 'Survive growing hordes as a few choices turn into a ridiculous build.' },
  'turn-based': { label: 'Turn-based roguelites', intro: 'Plan ahead, read the board, and win through great decisions rather than speed.' },
};
