import React from "react";
import { useRouter } from "next/router";
import { CountryDetail } from "../components/CountryDetail";

export default function CountryDetailPage() {
  const router = useRouter();

  const countryCode = router.query.CountryCode as string;

  return <CountryDetail countryCode={countryCode as string} />;
}
