/**
 * Custom hook to fetch the details of random Brewery.
 */
import { useState, useEffect } from "react";

export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  city: string;
  country: string;
  website_url: string;
  phone: string;
  latitude: string;
  longitude: string;
}

export function useRandBrewery() {
  const [brewery, setBrewery] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(false);
    const fetchBreweries = async () => {
      setLoading(true);
      const res = await fetch('/api/brewery/random');
      const data = await res.json();
      setBrewery(data);
      setLoading(false);
    };

  useEffect(() => {
    fetchBreweries();
  }, []);

  return { brewery, loading, refresh: fetchBreweries };
}
