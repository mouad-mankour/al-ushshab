---
name: Al-ʿUshshāb Heritage System
colors:
  surface: '#15130e'
  surface-dim: '#15130e'
  surface-bright: '#3c3933'
  surface-container-lowest: '#100e09'
  surface-container-low: '#1e1b16'
  surface-container: '#221f1a'
  surface-container-high: '#2c2a24'
  surface-container-highest: '#37342e'
  on-surface: '#e8e1d9'
  on-surface-variant: '#c1c8c3'
  inverse-surface: '#e8e1d9'
  inverse-on-surface: '#33302a'
  outline: '#8b928e'
  outline-variant: '#414844'
  surface-tint: '#abcebd'
  primary: '#abcebd'
  on-primary: '#16362a'
  primary-container: '#1a3a2e'
  on-primary-container: '#82a494'
  inverse-primary: '#456557'
  secondary: '#e4c278'
  on-secondary: '#3f2e00'
  secondary-container: '#5d4604'
  on-secondary-container: '#d5b46b'
  tertiary: '#bccca5'
  on-tertiary: '#273418'
  tertiary-container: '#2b381c'
  on-tertiary-container: '#92a27d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c7ebd9'
  primary-fixed-dim: '#abcebd'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#2d4d40'
  secondary-fixed: '#ffdf9b'
  secondary-fixed-dim: '#e4c278'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4302'
  tertiary-fixed: '#d7e9bf'
  tertiary-fixed-dim: '#bccca5'
  on-tertiary-fixed: '#131f06'
  on-tertiary-fixed-variant: '#3d4b2d'
  background: '#15130e'
  on-background: '#e8e1d9'
  surface-variant: '#37342e'
typography:
  display-ar:
    fontFamily: Aref Ruqaa
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  display-lat:
    fontFamily: Cormorant Garamond
    fontSize: 42px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-page: 64px
  gutter: 32px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in the "Al-ʿUshshāb" (The Herbalist) philosophy — a high-end Moroccan culinary journey that honors the slow, sacred rituals of the Maghreb. The personality is monastic and noble, prioritizing the weight of history over modern speed. It seeks to evoke a contemplative emotional response, treating food as a relic and dining as a ceremony.

The visual style is **Tactile and Skeuomorphic**, utilizing high-resolution scans of weathered paper (Parchemin) and cold stone textures. It avoids the clinical nature of flat design, opting instead for a "digital parchment" feel. The aesthetic mimics a Caravaggio-esque *chiaroscuro*, where light emerges from deep, verdant shadows to highlight artisanal details.

## Colors

The color palette is derived from Moroccan flora and ancient manuscripts. **Vert Profond** acts as the void — the primary background for high-impact immersive screens. **Parchemin** serves as the tactile content background for menus and long-form reading, ensuring a literary feel.

Pure white and black are strictly forbidden to maintain the aged, organic quality of the interface. **Or Calligraphique** is used exclusively for thin strokes, accents, and the logo anchor, mimicking gold leaf inlay. **Encre Sépia** provides the necessary legibility for text without the harshness of digital black.

## Typography

Typography in this design system is a dialogue between the calligraphic soul of the East and the academic elegance of the West.

- **Arabic Display:** *Aref Ruqaa* is used for primary titles, embodying the hand-inked heritage of the name.
- **Latin Display:** *Cormorant Garamond* (Italic) provides a scholarly, monastic contrast, used for subtitles and section headers.
- **Body:** *Inter Light* is selected for its functional invisibility. By using the Light weight, it remains delicate enough to not disrupt the ornate display faces while ensuring modern legibility.

Use generous line-heights to facilitate a "slow" reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** model with extreme margins, creating a "frame" effect similar to a museum placard or a sacred text. Content is never crowded; whitespace is treated as "breath."

The spacing rhythm is wide and intentional. The use of a 128px section gap forces the user to scroll slowly, emphasizing the "contemplative" nature of the brand. Layouts should be asymmetrical, occasionally breaking the grid with nature-morte photography that bleeds off the edges to create depth.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and texture rather than drop shadows.

1. **Base:** Vert Profond with a subtle stone grain texture.
2. **Mid:** Lin Brut surfaces that appear like heavy fabric or thick cardstock laid atop the base.
3. **Top:** Parchemin elements used for active content areas.

Instead of shadows, use **inner glows** and **fine 1px strokes** in Or Calligraphique or Vert Olive to define edges. This mimics the look of embossed paper or recessed stone carving. Backdrop blurs are used sparingly to suggest the presence of glass or oil lanterns.

## Shapes

The shape language is **Sharp (0)**.

To honor the monastic and "stone" aesthetic, the design system avoids the softness of modern rounded corners. Rectangular containers suggest the rigidity of architectural blocks and traditional bookbinding. Any "softness" in the UI should come from the organic edges of the photography or the curves of the calligraphy, not from the UI containers themselves.

## Components

- **Buttons:** Large, rectangular, with a 1px Or Calligraphique border. Text is set in Label-SM (Uppercase Inter). No fill, unless it is a "Primary Action," which uses a Vert Olive wash.
- **Cards:** Defined by a change in texture (e.g., from Stone to Paper) rather than a shadow. Use thin, hand-drawn separators instead of heavy borders.
- **Inputs:** Minimalist bottom-border only, using Encre Sépia. Labels float above in Cormorant Garamond Italic.
- **Photography Containers:** Always styled with a subtle "vignette" to mimic Caravaggio's lighting. Borders around images should look like traditional picture frames or recessed niches.
- **Navigation:** A singular, centered vertical anchor using the provided logo. Menu items are spaced widely to encourage deliberate interaction.
- **Interactive Ornaments:** Small, vector-based herbal illustrations used as list markers or section dividers.
