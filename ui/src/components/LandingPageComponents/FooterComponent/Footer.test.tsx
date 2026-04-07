import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme"; // Adjust path as needed
import Footer from "./Footer";
import content from "./footer.json";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("Footer Component", () => {
  it("renders the brand name and copyright from JSON", () => {
    renderWithTheme(<Footer />);

    expect(screen.getByText(content.brandName)).toBeInTheDocument();
    expect(screen.getByText(content.copyright)).toBeInTheDocument();
  });

  it("uses the semantic <footer> tag", () => {
    const { container } = renderWithTheme(<Footer />);
    const footerElement = container.querySelector("footer");
    expect(footerElement).toBeInTheDocument();
  });

  it("applies the dark theme background color", () => {
    const { container } = renderWithTheme(<Footer />);
    const footerElement = container.querySelector("footer");

    // Updated to match your theme's specific neutral.900 value
    expect(footerElement).toHaveStyle("background-color: rgb(17, 24, 39)");
  });

  it("applies the primary color to the brand name", () => {
    renderWithTheme(<Footer />);
    const brand = screen.getByText(content.brandName);

    // Using the RGB value for primary.main confirmed in your earlier tests
    expect(brand).toHaveStyle("color: rgb(29, 184, 122)");
  });
});
