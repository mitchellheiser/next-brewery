/**
 * Brewery details Random 
 */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/random`);
    const data = await response.json();
    res.status(200).json(data);
   } catch (err) {
    console.error("fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch random brewery" });
  }
}