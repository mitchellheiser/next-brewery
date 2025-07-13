 /**
 * Brewery details ID 
 *
 * Fetch brewery details using ID from URL
 */
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch brewery details');
    }

    const brewery = await response.json();
    res.status(200).json(brewery);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching brewery' });
  }
}
