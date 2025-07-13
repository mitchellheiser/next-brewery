import SearchAutocomplete from "@/components/SearchAutocomplete";
import BreweryTable from "@/components/BreweryTable";
import RandomSuggestBrewery from "@/components/RandSuggestBrewery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6 md: min-h-[900px]">
          <div className=" rounded-lg h-20">
            <SearchAutocomplete />
          </div>
          <div className="rounded-lg h-64">
            <BreweryTable />
          </div>
        </div>

          <div>
            <RandomSuggestBrewery />
          </div>
      </main>
    </div>
  );
}