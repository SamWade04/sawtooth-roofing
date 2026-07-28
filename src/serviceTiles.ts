// Shared service-tile data — Home grid and the /services hub both render the
// same card pattern, so they read the same source rather than keeping parallel
// copies that can drift.
//
// Images: the same photo + neutral alt already wired to each service's own page
// hero, so a tile and its destination match (Stage 3b Round 2 §3).
//
// Summaries: Round 2 amendment §3 — tile copy cut to its first sentence only.
// A pure deletion from each service's own `summary` frontmatter, byte-identical,
// no rewording. Round 3b reuses these on the hub; it does NOT author new cuts.
import stormSky01 from './assets/ai/ai-storm-sky-01.png';
import roofAerial02 from './assets/ai/ai-roof-aerial-02.png';
import shingleDetail01 from './assets/ai/ai-shingle-detail-01.png';
import commercialFlat01 from './assets/ai/ai-commercial-flat-01.png';

export const serviceTileImages = {
  'storm-damage-restoration': { src: stormSky01, alt: 'dark storm clouds over a residential neighborhood' },
  'roof-replacement': { src: roofAerial02, alt: 'aerial view of a residential roof with brown shingles' },
  'roof-repair': { src: shingleDetail01, alt: 'close-up texture of asphalt roof shingles' },
  // Draft entry — surfaced on the /services hub only, in the muted draft
  // treatment. Not part of the 3-tile Home grid.
  'commercial-roofing': { src: commercialFlat01, alt: 'flat commercial roof with rooftop units' },
};

export const serviceTileSummaries = {
  'storm-damage-restoration': "After a hailstorm or windstorm, Sawtooth Roofing inspects your roof, documents the damage for your insurance claim, and completes the approved restoration.",
  'roof-replacement': "Sawtooth Roofing replaces storm-worn and aging roofs across the Treasure Valley with roofing products built for Idaho's hail, wind, and temperature swings.",
  'roof-repair': "Sawtooth Roofing repairs leaks, missing or wind-lifted shingles, and failed flashing for homeowners across the Treasure Valley.",
};
