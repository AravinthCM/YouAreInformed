import type { PaletteOptions } from "@mui/material/styles";

const palette = {
  // ─── MUI REQUIRED KEYS (IMPORTANT) ─────────────────────────────
  primary: {
    main: "#1DB87A",
    light: "#22D48D",
    dark: "#158F5E",
    contrastText: "#FFFFFF",
  },

  secondary: {
    main: "#3B82F6",
  },

  error: {
    main: "#EF4444",
  },

  warning: {
    main: "#F59E0B",
  },

  info: {
    main: "#3B82F6",
  },

  success: {
    main: "#1DB87A",
  },

  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
  },

  text: {
    primary: "#111827",
    secondary: "#6B7585",
  },

  // ─── YOUR DESIGN SYSTEM (UNCHANGED + EXTENDED) ─────────────────
  brand: {
    primary: "#1DB87A",
    primaryHover: "#22D48D",
    primaryMuted: "#D6F5E8",
    primaryDark: "#158F5E",
  },

  neutral: {
    0: "#FFFFFF",
    50: "#F7F8FA",
    100: "#EEF1F6",
    150: "#E8EDF5",
    200: "#D1D8E4",
    400: "#9AA3B2",
    500: "#6B7585",
    700: "#3A4252",
    900: "#111827",
  },

  dark: {
    hero: "#0C1A27",
    surface: "#0F2235",
    card: "#14293F",
    border: "#1E3A52",
    textMuted: "#7A9AB5",
    textSecondary: "#A8C4D8",
    textPrimary: "#FFFFFF",
  },

  semantic: {
    success: "#1DB87A",
    successLight: "#D6F5E8",
    warning: "#F59E0B",
    warningLight: "#FEF3C7",
    error: "#EF4444",
    errorLight: "#FEE2E2",
    info: "#3B82F6",
    infoLight: "#DBEAFE",
  },

  overlay: {
    dark10: "rgba(12, 26, 39, 0.10)",
    dark30: "rgba(12, 26, 39, 0.30)",
    dark60: "rgba(12, 26, 39, 0.60)",
    dark80: "rgba(12, 26, 39, 0.80)",
    white10: "rgba(255, 255, 255, 0.10)",
    white20: "rgba(255, 255, 255, 0.20)",
  },

  gradient: {
    heroBackground:
      "linear-gradient(135deg, #0C1A27 0%, #0F2A3E 55%, #102F47 100%)",
    heroGlow:
      "radial-gradient(ellipse 60% 50% at 15% 50%, rgba(29, 184, 122, 0.12) 0%, transparent 70%)",
    ctaCard:
      "linear-gradient(145deg, #0F2235 0%, #0C1A27 100%)",
    lightSection:
      "linear-gradient(180deg, #FFFFFF 0%, #EEF1F6 100%)",
    accentUnderline:
      "linear-gradient(90deg, #1DB87A 0%, #22D48D 100%)",
    avatarRing:
      "linear-gradient(135deg, #D1D8E4 0%, #A8C4D8 100%)",
  },
} as const;

export type AppPalette = typeof palette;
export default palette as PaletteOptions;