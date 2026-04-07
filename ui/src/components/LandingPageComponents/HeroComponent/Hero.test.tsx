import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import userEvent from "@testing-library/user-event";
import theme from "../../../theme/theme";
import Hero from "./Hero";
import heroData from "./hero.json";

const renderHero = () =>
  render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>,
  );

describe("Hero", () => {
  // ── Rendering ────────────────────────────────────────────────
  it("renders the eyebrow label from JSON", () => {
    renderHero();
    expect(screen.getByText(heroData.eyebrow)).toBeInTheDocument();
  });

  it("renders the headline text from JSON", () => {
    renderHero();
    // Using a dynamic RegExp to match the text from JSON
    const mainHeadlineRegex = new RegExp(heroData.headlineMain, "i");
    expect(screen.getByText(mainHeadlineRegex)).toBeInTheDocument();
  });

  it("renders the highlighted span inside the headline", () => {
    renderHero();
    expect(screen.getByText(heroData.headlineHighlight)).toBeInTheDocument();
  });

  it("renders the subtext paragraph from JSON", () => {
    renderHero();
    // We use a partial match regex in case of extra whitespace/formatting
    const subtextRegex = new RegExp(heroData.subtext.substring(0, 20), "i");
    expect(screen.getByText(subtextRegex)).toBeInTheDocument();
  });

  it("renders the CTA button with correct label from JSON", () => {
    renderHero();
    expect(
      screen.getByRole("button", { name: new RegExp(heroData.ctaText, "i") }),
    ).toBeInTheDocument();
  });

  // ── Interaction ──────────────────────────────────────────────
  it("CTA button is clickable without throwing", async () => {
    renderHero();
    const button = screen.getByRole("button", {
      name: new RegExp(heroData.ctaText, "i"),
    });
    await userEvent.click(button);
    // no crash = pass
  });

  // ── Accessibility & Structure ────────────────────────────────
  it("section is rendered as a <section> element", () => {
    const { container } = renderHero();
    // MUI 'component="section"' renders a semantic <section> tag
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("h1 is present in the document", () => {
    const { container } = renderHero();
    // Typography variant="h1" renders a semantic <h1> tag
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
