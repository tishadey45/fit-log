import footer from "@/assets/footer.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
      
       <div className="flex items-center">
        <Image src={footer} alt="logo" width={50} height={50} />
       <h1 className="text-lg font-bold ml-3">FITLOG</h1>
       </div>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>© {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.</p>
      
      </nav>
    </footer>
  );
}
