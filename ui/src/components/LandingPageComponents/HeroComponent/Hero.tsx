import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        bgcolor: theme.palette.dark.hero,
        overflow: "hidden",
        py: { xs: 10, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box textAlign={{ xs: "left", md: "center" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ color: theme.palette.brand.primary, letterSpacing: 1.2 }}
            >
              FINANCIAL AWARENESS REDEFINED
            </Typography>

            <Typography
              variant="h1"
              sx={{ color: theme.palette.brand.primaryMuted }}
            >
              We're on a mission to help everyone make{" "}
              <Box component="span" sx={{ color: theme.palette.brand.primary }}>
                informed decisions.
              </Box>
            </Typography>

            <Typography my={3} variant="body1" sx={{ color: "text.secondary" }}>
              A step-by-step approach to every aspect of your financial life —
              creating awareness and empowering you to make an informed choice.
            </Typography>

            <Box>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: theme.palette.primary.dark,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
              >
                Let's start with some numbers
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
