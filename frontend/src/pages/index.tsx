import { CountryList } from "@/components/CountryList";
import { Form } from "@/components/Form";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ margin: 2 }}>
      <Form />
      <CountryList />
    </Box>
  );
}
