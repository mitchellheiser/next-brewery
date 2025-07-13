/**
 * Search Breweries
 *
 * Search Breweries based on provided query
 */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/autocomplete?query=${query}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch Breweries Autocomplete" });
  }
}
