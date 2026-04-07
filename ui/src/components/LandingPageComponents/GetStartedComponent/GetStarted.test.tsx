import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme"; // Adjust path as needed
import GetStarted from "./GetStarted";
import content from "./get-started.json";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe("GetStarted Component", () => {
  it("renders the eyebrow, headline, and description from JSON", () => {
    renderWithTheme(<GetStarted />);

    expect(screen.getByText(content.eyebrow)).toBeInTheDocument();
    expect(screen.getByText(content.headline)).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders the primary button with the correct text", () => {
    renderWithTheme(<GetStarted />);
    const button = screen.getByRole("button", {
      name: new RegExp(content.buttonText, "i"),
    });
    expect(button).toBeInTheDocument();
  });

  it("renders the ArrowForward icon inside the button", () => {
    const { container } = renderWithTheme(<GetStarted />);
    const icon = container.querySelector('svg[data-testid="ArrowForwardIcon"]');
    expect(icon).toBeInTheDocument();
  });

  it("applies the correct background color from the theme", () => {
    const { container } = renderWithTheme(<GetStarted />);
    const section = container.querySelector("section");

    // Assuming neutral.0 is white or your theme's base color
    // If neutral.0 maps to #FFFFFF, JSDOM usually returns rgb(255, 255, 255)
    expect(section).toHaveStyle("background-color: rgb(255, 255, 255)");
  });

  it("centers the text and stack content", () => {
    renderWithTheme(<GetStarted />);

    // Check if the content wrapper is centered
    const wrapper = screen.getByText(content.headline).parentElement;
    expect(wrapper).toHaveStyle("text-align: center");
  });

  it("ensures the button is 'contained' and uses the primary color", () => {
    renderWithTheme(<GetStarted />);
    const button = screen.getByRole("button");

    // In MUI, 'contained' buttons usually have a background color from the primary palette
    // Adjust the RGB value below to match your theme.palette.primary.main
    expect(button).toHaveStyle("background-color: rgb(29, 184, 122)");
  });
});
