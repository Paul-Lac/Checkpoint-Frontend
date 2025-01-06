import { useGetCountryByCodeQuery } from "@/graphql/generated/schema";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";

type CountryDetailProps = {
  countryCode?: string;
};

export function CountryDetail({ countryCode }: CountryDetailProps) {
  const { data, loading, error } = useGetCountryByCodeQuery({
    variables: { code: countryCode || "" },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  if (!data || !data.country) {
    return <Typography color="error">Country not found</Typography>;
  }

  const { country } = data;

  return (
    <Box sx={{ margin: 8 }}>
      <Card sx={{ maxWidth: 400, margin: "auto" }}>
        <CardContent>
          <Typography align="center">{country.emoji}</Typography>
          <Typography align="center">
            Name: {country.name} ({country.code})
          </Typography>
          {country.continent && (
            <Typography align="center">
              Continent: {country.continent.name}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
