/**
 * Brewery Table Component - table to display brewery details, details fetched via custom hook
 */
import { useState } from "react";
import { useRouter } from "next/router";
import { useBreweryFilter, Brewery } from "@/hooks/useBreweryFilter";
import FiltersPanel from "./FiltersPanel";
import Loading from "./Loading";

export default function BreweryTable() {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [submitName, setSubmitName] = useState("");
  const [submitCity, setSubmitCity] = useState("");

  const router = useRouter();
  
  function handleFilterSubmit() {
    setSubmitName(nameFilter);
    setSubmitCity(cityFilter);
  }
  
  // custom hook to fetch brewery data to populate table
  const { breweries, loading } = useBreweryFilter(submitName, submitCity, page);

  return (
    
    <div className="bg-white rounded-lg shadow-md p-2 border border-gray-200">
      <FiltersPanel 
        name={nameFilter}
        city={cityFilter}
        onNameChange={setNameFilter}
        onCityChange={setCityFilter}
        onSubmit={handleFilterSubmit}
      />
      {/* conditional render display loading component and hide table while wait for custom hook */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="overflow-x-auto max-h-[500px] overflow-y-scroll rounded shadow border rounded border-gray-200">
            <table className=" hidden md:table min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">City</th>
                  <th className="px-4 py-3 font-semibold">Country</th>
                  <th className="px-4 py-3 font-semibold">Website</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                </tr>
              </thead>
              <tbody>
                {breweries.map((brewery: Brewery) => (
                  <tr
                    key={brewery.id}
                    className="border-t hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/brewery/${brewery.id}`)}
                  >
                    <td className="px-4 py-3">{brewery.name}</td>
                    <td className="px-4 py-3 capitalize">{brewery.brewery_type}</td>
                    <td className="px-4 py-3">{brewery.city}</td>
                    <td className="px-4 py-3">{brewery.country}</td>
                    <td className="px-4 py-3">
                      <a
                        href={brewery.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit
                      </a>
                    </td>
                    <td className="px-4 py-3">{brewery.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* mobile display used becuase table element doesn't work well on mobile */}
            <div className="md:hidden mt-4 space-y-4">
              {breweries.map((brewery: Brewery) => (
                <div
                  key={brewery.id}
                  className="p-4 rounded shadow bg-white cursor-pointer"
                  onClick={() => router.push(`/brewery/${brewery.id}`)}
                >
                  <p className="font-semibold text-lg">{brewery.name}</p>
                  <p className="text-sm"><strong>Type:</strong> {brewery.brewery_type}</p>
                  <p className="text-sm"><strong>City:</strong> {brewery.city}</p>
                  <p className="text-sm"><strong>Country:</strong> {brewery.country}</p>
                  <p className="text-sm"><strong>Phone:</strong> {brewery.phone}</p>
                  {brewery.website_url && (
                    <a
                      href={brewery.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm underline block mt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit website
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-4 flex justify-center items-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded text-sm disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}
