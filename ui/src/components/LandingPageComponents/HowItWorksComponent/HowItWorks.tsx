import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TuneIcon from "@mui/icons-material/Tune";
import CalculateIcon from "@mui/icons-material/Calculate";
import MonitoringIcon from "@mui/icons-material/MonetizationOn";

// Import your JSON data
import content from "./how-it-works.json";

const IconRenderer = ({ name }: { name: string }) => {
  const iconProps = { sx: { color: "#1DB87A", fontSize: 24 } };

  switch (name) {
    case "tune":
      return <TuneIcon {...iconProps} />;
    case "calculate":
      return <CalculateIcon {...iconProps} />;
    case "monitoring":
      return <MonitoringIcon {...iconProps} />;
    default:
      return null;
  }
};

export default function HowItWorks() {
  return (
    <Box
      id="how-it-works"
      component="section"
      sx={{ py: { xs: 10, md: 8 }, bgcolor: "neutral.50" }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="caption"
            sx={{ color: "primary.main", display: "block", mb: 1.5 }}
          >
            {content.eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ color: "text.primary" }}>
            {content.headline}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {content.steps.map(({ iconName, title, body }) => (
            <Grid item xs={12} md={4} key={title}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: "16px",
                  border: "0.5px solid",
                  borderColor: "divider",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    bgcolor: "rgba(29, 184, 122, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <IconRenderer name={iconName} />
                </Box>
                <Typography
                  variant="body1"
                  fontWeight={800}
                  sx={{ mb: 1.5, color: "text.primary" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.75 }}
                >
                  {body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
