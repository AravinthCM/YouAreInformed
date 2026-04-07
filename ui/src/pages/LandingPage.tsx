import { Box } from "@mui/material";
import Hero from "../components/LandingPageComponents/HeroComponent/Hero";
import HowItWorks from "../components/LandingPageComponents/HowItWorksComponent/HowItWorks";

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <HowItWorks />
    </Box>
  );
};

export default LandingPage;
