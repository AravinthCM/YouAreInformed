import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Import your JSON data
import content from "./footer.json";

export default function Footer() {
  return (
    <Box id="contact" component="footer" sx={{ bgcolor: "neutral.900", py: 6 }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, md: 0 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography sx={{ fontWeight: 800, color: "primary.main" }}>
            {content.brandName}
          </Typography>

          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography variant="caption" sx={{ color: "dark.textMuted" }}>
              {content.copyright}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
