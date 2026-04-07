import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme"; // Adjust path as needed
import WhyItMatters from "./WhyItMatters";
import content from "./whyItMatters.json";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("WhyItMatters Component", () => {
  it("renders all text content from JSON accurately", () => {
    renderWithTheme(<WhyItMatters />);

    expect(screen.getByText(content.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(content.headline)).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders the correct number of statistics", () => {
    renderWithTheme(<WhyItMatters />);

    content.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("applies the dark background theme color to the section", () => {
    const { container } = renderWithTheme(<WhyItMatters />);
    const section = container.querySelector("section");

    // Use the RGB value received in your error log
    expect(section).toHaveStyle("background-color: rgb(12, 26, 39)");
  });

  it("contains the gradient glow accent layer", () => {
    const { container } = renderWithTheme(<WhyItMatters />);

    // The glow is an absolute box inside the relative section
    const section = container.querySelector("section");
    const glowBox = section?.querySelector("div"); // The first div inside section is our glow

    expect(glowBox).toHaveStyle({
      position: "absolute",
      pointerEvents: "none",
    });
  });

  it("ensures the content container is layered above the glow accent", () => {
    renderWithTheme(<WhyItMatters />);

    // The container should have relative positioning and a z-index
    const containerElement = screen
      .getByText(content.headline)
      .closest(".MuiContainer-root");
    expect(containerElement).toHaveStyle({
      position: "relative",
      zIndex: "1",
    });
  });

  it("uses the correct primary light color for statistical values", () => {
    renderWithTheme(<WhyItMatters />);

    const firstValue = screen.getByText(content.stats[0].value);
    // Use the RGB value received in your error log
    expect(firstValue).toHaveStyle("color: rgb(34, 212, 141)");
  });
});
