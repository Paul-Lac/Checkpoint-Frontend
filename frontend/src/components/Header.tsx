import Link from "next/link";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(189, 0, 65)" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Checkpoint : frontend</Typography>
          <Typography variant="body1" component="a" sx={{ color: "white" }}>
            Countries
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
