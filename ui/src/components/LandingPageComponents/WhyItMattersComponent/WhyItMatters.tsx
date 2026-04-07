import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import content from "./whyItMatters.json";

export default function WhyItMatters() {
  return (
    <Box
      id="WhyItMatters"
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: "dark.hero",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "gradient.ctaCard",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 640, mb: 5 }}>
          <Typography
            variant="caption"
            sx={{ color: "primary.main", display: "block", mb: 2 }}
          >
            {content.eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ color: "dark.textPrimary", mb: 3 }}>
            {content.headline}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "dark.textMuted", lineHeight: 1.8 }}
          >
            {content.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          {content.stats.map(({ value, label }) => (
            <Grid item xs={6} md={3} key={label}>
              <Typography
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 800,
                  color: "primary.light",
                  letterSpacing: "-0.02em",
                  mb: 0.75,
                }}
              >
                {value}
              </Typography>
              <Typography variant="caption" sx={{ color: "dark.textMuted" }}>
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
