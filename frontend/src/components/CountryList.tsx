import React from "react";
import Link from "next/link";
import { useGetAllCountriesQuery } from "../graphql/generated/schema";
import {
  Box,
  Card,
  CircularProgress,
  Typography,
  CardContent,
} from "@mui/material";

export function CountryList() {
  const { data, loading, error } = useGetAllCountriesQuery();

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;
  console.log("data", data);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        margin: 5,
      }}
    >
      {data?.countries.map((country) => (
        <Link
          href={`/${country.code}`}
          passHref
          key={country.id}
          style={{ textDecoration: "none" }}
        >
          <Card sx={{ width: "10rem" }}>
            <CardContent
              sx={{
                display: "flex",
                gap: "2rem",
              }}
            >
              <Typography variant="h6">{country.name}</Typography>
              <Typography variant="h6">{country.emoji}</Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
