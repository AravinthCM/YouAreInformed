// src/theme/typography.ts
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const typography = {
  fontFamily: "'Manrope', sans-serif",

  h1: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    fontSize: "2rem", // xs  — mobile
    [baseTheme.breakpoints.up("sm")]: { fontSize: "2rem" }, // 640px — tablet
    [baseTheme.breakpoints.up("md")]: { fontSize: "2.5rem" }, // 768px — small laptop
    [baseTheme.breakpoints.up("lg")]: { fontSize: "2.75rem" }, // 1024px — laptop ✅ not too big
    [baseTheme.breakpoints.up("xl")]: { fontSize: "3.75rem" }, // 1280px — desktop only
  },

  h2: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
    fontSize: "1.5rem",
    [baseTheme.breakpoints.up("sm")]: { fontSize: "1.75rem" },
    [baseTheme.breakpoints.up("md")]: { fontSize: "2rem" },
    [baseTheme.breakpoints.up("lg")]: { fontSize: "2.25rem" },
    [baseTheme.breakpoints.up("xl")]: { fontSize: "3rem" },
  },

  h3: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: "1.1rem",
    [baseTheme.breakpoints.up("md")]: { fontSize: "1.25rem" },
    [baseTheme.breakpoints.up("xl")]: { fontSize: "1.5rem" },
  },

  body1: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    lineHeight: 1.75,
    fontSize: "0.9375rem", // slightly smaller on mobile
    [baseTheme.breakpoints.up("md")]: { fontSize: "1rem" },
    [baseTheme.breakpoints.up("xl")]: { fontSize: "1.125rem" }, // text-lg only on wide desktop
  },

  body2: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    lineHeight: 1.6,
    fontSize: "0.8125rem",
    [baseTheme.breakpoints.up("md")]: { fontSize: "0.875rem" },
  },

  button: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    textTransform: "none" as const,
    fontSize: "0.9375rem",
  },

  caption: {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    fontSize: "0.6875rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
};

export default typography;
