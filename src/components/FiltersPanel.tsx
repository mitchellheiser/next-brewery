/**
 * FiltersPanel Component - Renders input fields for filtering breweries by name and city, 'Go' button to apply the filters
 */

interface FiltersPanelProps {
  name: string;
  city: string;
  onNameChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onSubmit: () => void;
}

export default function FiltersPanel({
  name,
  city,
  onNameChange,
  onCityChange,
  onSubmit,
}: FiltersPanelProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-white px-4 py-3">
      <input
        type="text"
        placeholder="Filter by name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className="border rounded px-3 py-2 w-1/3 md: w-full "
      />
      <input
        type="text"
        placeholder="Filter by city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="border rounded px-3 py-2 w-1/3 md: w-full"
      />
      <button
        onClick={onSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 md: w-full"
      >
        Go
      </button>
    </div>
  );
}

