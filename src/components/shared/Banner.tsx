import banner from "@/assets/banner.png";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="Tailwind CSS hero component"
          src={banner}
          width={500}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
            <h3 className=" font-semibold mb-6 text-lime-500">
                WORKOUT LIBRARY
            </h3>
          <h1 className="text-4xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-6 text-gray-700">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn bg-lime-500 rounded-1xl">BROWSE WORKOUTS</button>
        </div>
      </div>
    </div>
  );
}
