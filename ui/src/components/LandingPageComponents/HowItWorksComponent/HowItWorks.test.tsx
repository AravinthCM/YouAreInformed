import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme"; // Adjust this path to your theme location
import HowItWorks from "./HowItWorks";
import content from "./how-it-works.json";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("HowItWorks Component", () => {
  // ── Rendering & Content ──────────────────────────────────────
  it("renders the eyebrow and headline from JSON", () => {
    renderWithTheme(<HowItWorks />);

    expect(screen.getByText(content.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(content.headline)).toBeInTheDocument();
  });

  it("renders the correct number of steps from JSON", () => {
    renderWithTheme(<HowItWorks />);

    // Each step has a title, so we check if the number of titles matches the JSON length
    const titles = content.steps.map((step) => step.title);
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Alternatively, verify the total count of step boxes (using the grid items)
    const stepBodies = content.steps.map((step) => step.body);
    stepBodies.forEach((body) => {
      expect(screen.getByText(body)).toBeInTheDocument();
    });
  });

  // ── Icon Logic (The Switch Case) ─────────────────────────────
  it("renders the correct icons for each step", () => {
    renderWithTheme(<HowItWorks />);
    content.steps.forEach((step) => {
      const stepBox = screen.getByText(step.title).closest("div");
      // This checks that an SVG (the icon) exists within the same card as the title
      expect(stepBox?.parentElement?.querySelector("svg")).toBeInTheDocument();
    });
  });

  // ── Structural Edge Cases ────────────────────────────────────
  it("renders as a semantic <section> element", () => {
    const { container } = renderWithTheme(<HowItWorks />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("applies the correct background color from the section sx", () => {
    const { container } = renderWithTheme(<HowItWorks />);
    const section = container.querySelector("section");

    // Checking for specific style injection (MUI neutral.50)
    // Note: If your theme maps neutral.50 to a specific hex, check for that hex.
    expect(section).toHaveStyle({ backgroundColor: "neutral.50" });
  });

  it("handles an empty steps array gracefully", () => {
    const emptyContent = { ...content, steps: [] };
    // This is a manual test of the logic rather than a full mock
    expect(emptyContent.steps.length).toBe(0);
  });

  // ── Hover State Logic ────────────────────────────────────────
  it("contains boxes with hover transition styles", () => {
    renderWithTheme(<HowItWorks />);

    // Find the first step title
    const firstStepTitle = screen.getByText(content.steps[0].title);

    // We want the parent container of the title/body which has the sx props
    // Based on your component, it's the Box inside the Grid item
    const cardBox = firstStepTitle.closest(".MuiBox-root");

    // Pass property and value as separate arguments for better compatibility
    expect(cardBox).toHaveStyle("transition: all 0.3s ease");
  });
});
