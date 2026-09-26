import Banner from "@/components/homePage/Banner";
import Library from "@/components/homePage/workout";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
     <Banner/>
     <Library/>
    </div>
  );
}
