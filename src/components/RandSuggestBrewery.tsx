/**
 * RandSuggestBrewery component - Randomly suggests a brewery and displays its details along with a map, able to be refreshed
 */
import { useRandBrewery, Brewery } from "@/hooks/useRandBrewery";
import Loading from "./Loading";
import GoogleMaps from "./GoogleMaps";
export default function RandomSuggestBrewery() {
    const { brewery, loading, refresh } = useRandBrewery();
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">🍻 Staff Suggestion</h2>
            {/* conditional render either loading component or brewery details */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    {brewery.map((rand: Brewery) => (
                        <div key={rand.id} className="space-y-1 text-gray-800">
                            <h3 className="text-xl font-bold">{rand.name}</h3>
                            <p className="text-sm text-gray-600">{rand.city}, {rand.country}</p>
                            <p className="capitalize text-sm">Type: {rand.brewery_type}</p>
                            {rand.phone && <p className="text-sm">📞 {rand.phone}</p>}
                            {rand.website_url && (
                                <a
                                    href={rand.website_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    Visit Website
                                </a>
                            )}
                            {rand.latitude && rand.longitude && (
                                <GoogleMaps longitude={rand.longitude} latitude={rand.latitude} />
                              )}
                        </div>
                        
                    ))}
                    <div className="p-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full" onClick={refresh}>Click For Another Suggestion !</button>
                    </div>
                </>
            )}
        </div>
        
    );
    
}