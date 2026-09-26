import Banner from "@/components/homePage/Banner";
import Library from "@/components/homePage/workout";

export default function HomePage() {
  return (
    <div className="mx-auto py-10 px-2">
      <Banner />
      <Library />
    </div>
  );
}
