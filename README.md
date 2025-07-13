
# 🍺 Pint Finder

This project is a brewery search web app built with **Next.js**, **TypeScript**, and **React Hooks**. It uses the [Open Brewery DB API](https://www.openbrewerydb.org/) to provide searchable, filterable, and paginated brewery data, along with detailed views and an embedded map.

## Features

### 🔍 Landing Page
- **Autosuggest Search Bar** (with debounce)
  - Suggestions load as you type.
  - Clicking a suggestion redirects to the details page.

- **Filtering Panel**
  - Filter by **name** and **city**.
  - "Go" button triggers the search with updated filters.

- **Paginated Table**
  - Displays 15 breweries per page.
  - Columns: Name, Type, City, Country, Website, Phone.
  - Clicking a row redirects to a details page.

### 🗺️ Details Page
- Brewery information:
  - Name, URL, Street, City, State, Postcode, Country.
- Google Map embedding using coordinates.

### Extras
- Random brewery suggestion component.
- Responsive layout with mobile-first design.

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/next-brewery.git
cd next-brewery
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Author

Mitchell Heiser  

