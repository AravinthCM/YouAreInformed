import { Box } from "@mui/material";
import Hero from "../components/LandingPageComponents/HeroComponent/Hero";
import HowItWorks from "../components/LandingPageComponents/HowItWorksComponent/HowItWorks";
import WhyItMatters from "../components/LandingPageComponents/WhyItMattersComponent/WhyItMatters";
import GetStarted from "../components/LandingPageComponents/GetStartedComponent/GetStarted";
import Footer from "../components/LandingPageComponents/FooterComponent/Footer";

const LandingPage = () => {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <WhyItMatters />
      <GetStarted />
      <Footer />
    </Box>
  );
};

export default LandingPage;
