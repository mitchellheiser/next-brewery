/**
 * Custom brewery filter hook used to control the filtering on name and city and the pagination .
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
}

export function useBreweryFilter(nameFilter: string, cityFilter: string, page: number) {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBreweries = async () => {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        per_page: "15",
      });
      if (nameFilter) params.append("by_name", nameFilter);
      if (cityFilter) params.append("by_city", cityFilter);
      
      const res = await fetch(`/api/breweries?${params}`);
      const data = await res.json();
      setBreweries(data);
      setLoading(false);
    };

    fetchBreweries();
  }, [page, nameFilter, cityFilter]);

  return { breweries, loading };
}
