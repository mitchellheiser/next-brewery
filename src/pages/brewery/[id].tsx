import { useRouter } from "next/router";
import BreweryDetails from "@/components/BreweryDetails";

export default function BreweryPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return <BreweryDetails id={id as string} />;
}
