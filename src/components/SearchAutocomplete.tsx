/**
 * Search component with autocomplete - utilises debounce how to delay submission of value while user is typing
 */
import { useState, useEffect} from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/router";
import Loading from "./Loading";

export default function SearchAutocomplete() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }
    fetch(`/api/search?query=${debouncedQuery}`)
    .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
    })
    .then((data) => {
        setSuggestions(data)
    })
    .catch((err) => {
        console.error("Fetch error:", err);
    })
    .finally(() => setLoading(false));
  

  }, [debouncedQuery]);

  return (
     <div className="relative w-full bg-white">
      <input
        type="text"
        placeholder="Search breweries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {loading ? (
        <Loading />
      ): (
        <>
          {suggestions.length > 0 && (
            <ul className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-y-auto">
              {suggestions.map((brewery: any) => (
                <li
                  key={brewery.id}
                  onClick={() => router.push(`/brewery/${brewery.id}`)}
                  className="px-4 py-2 hover:bg-indigo-100 cursor-pointer text-sm"
                >
                  {brewery.name}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
