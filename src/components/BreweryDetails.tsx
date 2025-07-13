/**
 * Brewery Details component - display indvidual brewery details via id passed in props and display location on maps
 */
import { useEffect, useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { useRouter } from "next/router";

interface Brewery {
  id: string;
  name: string;
  website_url: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  latitude: string;
  longitude: string;
}

interface Props {
  id: string;
}

export default function BreweryDetails({ id }: Props) {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // get brewery details from api and control loading state
    async function fetchBrewery() {
      try {
        setLoading(true);
        const res = await fetch(`/api/brewery/${router.query.id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBrewery(data);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBrewery();
  }, [id]);
   // handle loading and api failure response
  if (loading) return <p>Loading brewery details...</p>;
  if (error || !brewery) return <p>Something went wrong.</p>;

  return (
    <div className="bg-white rounded shadow border rounded border-gray-200 p-4 ">
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-blue-600 hover:underline text-m font-bold"
      >
        ← Back
      </button>
      <h2 className="text-3xl text-blue-600 p-3">{brewery.name}</h2>
      {brewery.website_url && (
        <a
          href={brewery.website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline p-3"
        >
          {brewery.website_url}
        </a>
      )}
      <p className="p-3">
        Address:<br />
        {brewery.street}<br />
        {brewery.city}, {brewery.state} {brewery.postal_code}<br />
        {brewery.country}
      </p>
      {/* conditional render maps display */}
      {brewery.latitude && brewery.longitude && (
        <GoogleMaps longitude={brewery.longitude} latitude={brewery.latitude} />
      )}
    </div>
  );
}
