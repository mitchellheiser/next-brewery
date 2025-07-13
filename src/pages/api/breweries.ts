/**
 * List Breweries 
 *
 * Fetch list of breweries based on provied query
 */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = new URLSearchParams(req.query as Record<string, string>);
  if (!query){
      return res.status(400).json({ error: "Missing search params" });
  }
  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?${query}`);
    const data = await response.json();
    res.status(200).json(data);
   } catch (err) {
    console.error("fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch breweries " });
  }
}