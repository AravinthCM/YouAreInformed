// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      primary: string;
      primaryHover: string;
      primaryMuted: string;
      primaryDark: string;
    };
    neutral: {
      0: string;
      50: string;
      100: string;
      150: string;
      200: string;
      400: string;
      500: string;
      700: string;
      900: string;
    };
    dark: {
      hero: string;
      surface: string;
      card: string;
      border: string;
      textMuted: string;
      textSecondary: string;
      textPrimary: string;
    };
    semantic: {
      success: string;
      successLight: string;
      warning: string;
      warningLight: string;
      error: string;
      errorLight: string;
      info: string;
      infoLight: string;
    };
    overlay: {
      dark10: string;
      dark30: string;
      dark60: string;
      dark80: string;
      white10: string;
      white20: string;
    };
    gradient: {
      heroBackground: string;
      heroGlow: string;
      ctaCard: string;
      lightSection: string;
      accentUnderline: string;
      avatarRing: string;
    };
  }
  interface PaletteOptions {
    brand?: Palette["brand"];
    neutral?: Palette["neutral"];
    dark?: Palette["dark"];
    semantic?: Palette["semantic"];
    overlay?: Palette["overlay"];
    gradient?: Palette["gradient"];
  }
}

const theme = createTheme({
  palette,
  typography,

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  spacing: 8,

  components: {
    // ── Global Container ────────────────────────────────────────
    // Mirrors: max-w-screen-xl mx-auto px-8
    // max-screen-xl in Tailwind = 1280px
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          // horizontal padding at each breakpoint (mirrors px-8 = 32px)
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 640px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          // maxWidth for xl container
          "&.MuiContainer-maxWidthXl": {
            maxWidth: "1280px",
          },
        },
      },
    },

    // ── Button global defaults ──────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // rounded-xl
          padding: "12px 32px", // py-3 px-8
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        containedPrimary: {
          boxShadow: "0 10px 30px rgba(29, 184, 122, 0.25)",
          "&:hover": {
            boxShadow: "0 10px 30px rgba(29, 184, 122, 0.35)",
          },
        },
      },
    },

    // ── Typography global ───────────────────────────────────────
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          body1: "p",
          body2: "p",
        },
      },
    },

    // ── CssBaseline reset ───────────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html, body, #root {
          width: 100%;
          min-height: 100vh;
        }
        body {
          font-family: 'Manrope', sans-serif;
          background-color: #ffffff;
          color: #101c2e;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `,
    },
  },
});

export default theme;
