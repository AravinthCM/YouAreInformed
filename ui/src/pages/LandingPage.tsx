import { Box } from "@mui/material";
import Hero from "../components/LandingPageComponents/HeroComponent/Hero";
import HowItWorks from "../components/LandingPageComponents/HowItWorksComponent/HowItWorks";
import WhyItMatters from "../components/LandingPageComponents/WhyItMattersComponent/WhyItMatters";

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <WhyItMatters />
    </Box>
  );
};

export default LandingPage;
