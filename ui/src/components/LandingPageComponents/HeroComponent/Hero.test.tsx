import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import userEvent from "@testing-library/user-event";
import theme from "../../../theme/theme";
import Hero from "./Hero";

const renderHero = () =>
  render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>,
  );

describe("Hero", () => {
  // ── Rendering ────────────────────────────────────────────────
  it("renders the eyebrow label", () => {
    renderHero();
    expect(
      screen.getByText("FINANCIAL AWARENESS REDEFINED"),
    ).toBeInTheDocument();
  });

  it("renders the headline text", () => {
    renderHero();
    expect(
      screen.getByText(/we're on a mission to help everyone make/i),
    ).toBeInTheDocument();
  });

  it("renders the highlighted span inside the headline", () => {
    renderHero();
    expect(screen.getByText("informed decisions.")).toBeInTheDocument();
  });

  it("renders the subtext paragraph", () => {
    renderHero();
    expect(
      screen.getByText(/a step-by-step approach to every aspect/i),
    ).toBeInTheDocument();
  });

  it("renders the CTA button with correct label", () => {
    renderHero();
    expect(
      screen.getByRole("button", { name: /let's start with some numbers/i }),
    ).toBeInTheDocument();
  });

  // ── Interaction ──────────────────────────────────────────────
  it("CTA button is clickable without throwing", async () => {
    renderHero();
    const button = screen.getByRole("button", {
      name: /let's start with some numbers/i,
    });
    await userEvent.click(button);
    // no crash = pass
  });

  // ── Accessibility ────────────────────────────────────────────
  it("section is rendered as a <section> element", () => {
    const { container } = renderHero();
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("h1 is present in the document", () => {
    const { container } = renderHero();
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
