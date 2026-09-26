import { IWorkout } from "@/types/library.type";
import { Clock, Dumbbell, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LibraryCardProps {
  workout: IWorkout;
}

export default function LibraryCard({ workout }: LibraryCardProps) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group h-full  overflow-hidden rounded-2xl bg-[#111] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          
          <h2 className="text-xl font-bold uppercase text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <Dumbbell size={16} />
            <span>{workout.equipment}</span>
          </div>
          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-700 pt-4">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#ccff00]" />
              <div>
                <p className="text-sm font-semibold text-white">
                  {workout.duration} min
                </p>
              </div>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-[#ccff00]" />
              <div>
                <p className="text-sm font-semibold text-white">
                  {workout.caloriesBurned}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star size={16} className="text-[#ccff00]" />
              <div>
                <p className="text-sm font-semibold text-white">
                  {workout.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
