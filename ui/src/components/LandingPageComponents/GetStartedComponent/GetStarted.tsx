import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import your JSON data
import content from "./get-started.json";

export default function GetStarted() {
  return (
    <Box
      id="get-started"
      component="section"
      sx={{ py: { xs: 10, md: 8 }, bgcolor: "neutral.0" }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{ color: "primary.main", display: "block", mb: 2 }}
          >
            {content.eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ color: "text.primary", mb: 3 }}>
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 480, mx: "auto", mb: 6 }}
          >
            {content.description}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 20 }} />}
              sx={{ px: 4, py: 1.75, fontSize: "0.9375rem" }}
            >
              {content.buttonText}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
