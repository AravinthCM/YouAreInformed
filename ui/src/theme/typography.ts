import type { TypographyOptions } from "@mui/material/styles/createTypography";

/**
 * typography.ts
 *
 * Responsive type scale using clamp(min, fluid, max).
 * Base: 16px | Scale: Major Third (×1.25)
 * Fonts: Source Sans 3 (headings) · Poppins (body) · DM Sans (logo)
 */

// Extend MUI's TypographyVariantsOptions to include custom variants
declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: React.CSSProperties;
    overline2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    overline2: true;
  }
}

// ─── Font family tokens ───────────────────────────────────────────────────────
export const FONT_HEADING = "'Source Sans 3', sans-serif";
export const FONT_BODY = "'Poppins', sans-serif";
export const FONT_LOGO = "'DM Sans', sans-serif";

// ─── Google Fonts import string (paste in index.html or _document.tsx) ────────
// @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Poppins:wght@400;500;600&family=Source+Sans+3:wght@600;700&display=swap');

const typography: TypographyOptions = {
  fontFamily: FONT_BODY,
  htmlFontSize: 16,

  // ─── Headings ───────────────────────────────────────────────────────────────
  h1: {
    fontFamily: FONT_HEADING,
    // 32px → 56px fluid
    fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: FONT_HEADING,
    // 26px → 42px fluid
    fontSize: "clamp(1.625rem, 3vw + 0.75rem, 2.625rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.015em",
  },
  h3: {
    fontFamily: FONT_HEADING,
    // 22px → 34px fluid
    fontSize: "clamp(1.375rem, 2vw + 0.75rem, 2.125rem)",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },
  h4: {
    fontFamily: FONT_HEADING,
    // 18px → 26px fluid
    fontSize: "clamp(1.125rem, 1.5vw + 0.5rem, 1.625rem)",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.005em",
  },
  h5: {
    fontFamily: FONT_HEADING,
    fontSize: "1.25rem", // 20px — fixed; too small to need fluid
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontFamily: FONT_HEADING,
    fontSize: "1rem", // 16px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0.005em",
  },

  // ─── Body ────────────────────────────────────────────────────────────────────
  body1: {
    fontFamily: FONT_BODY,
    fontSize: "1rem", // 16px — never fluid; keeps reading comfort on all screens
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: "0.01em",
  },
  body2: {
    fontFamily: FONT_BODY,
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.01em",
  },

  // ─── Supporting ──────────────────────────────────────────────────────────────
  subtitle1: {
    fontFamily: FONT_BODY,
    fontSize: "1.125rem", // 18px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.005em",
  },
  subtitle2: {
    fontFamily: FONT_BODY,
    fontSize: "0.875rem", // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  caption: {
    fontFamily: FONT_BODY,
    fontSize: "0.75rem", // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.025em",
  },
  overline: {
    fontFamily: FONT_BODY,
    fontSize: "0.6875rem", // 11px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  // ─── Button ──────────────────────────────────────────────────────────────────
  button: {
    fontFamily: FONT_BODY,
    fontSize: "0.9375rem", // 15px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.02em",
    textTransform: "none",
  },

  // ─── Custom variants ─────────────────────────────────────────────────────────
  logo: {
    fontFamily: FONT_LOGO,
    // 20px → 28px fluid
    fontSize: "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.025em",
  },
  overline2: {
    fontFamily: FONT_BODY,
    fontSize: "0.625rem", // 10px — tighter label
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
};

export default typography;