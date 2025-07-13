/**
 * App layout
 */
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white text-blue-600 p-4 shadow">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-xl font-semibold" onClick={() => router.push("/")}>PintFinder 🍻</h1>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      <footer className="bg-white text-sm text-center py-4 mt-4 shadow">
        <p>© 2025 PintFinder</p>
      </footer>
    </div>
  );
}
