import LibraryCard from "@/components/shared/LibraryCard";
import WorkoutSkeleton from "@/components/shared/WorkoutSkeleton";
import { IWorkout } from "@/types/library.type";
import { Suspense } from "react";

const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const response = await fetch(
      "https://api.api-store.workers.dev/api/fitlog"
    );

    console.log("Response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data = await response.json();

    console.log(data);
    console.log("Is Array:", Array.isArray(data));

    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

async function LibraryContent() {
  const workouts = await getWorkouts();

  console.log("Workouts in Library:", workouts);

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <LibraryCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default function Library() {
  return (
    <section className="container mx-auto mt-10 mb-20">
      <h2 className="text-3xl font-bold md:text-4xl">
        THE LIBRARY
      </h2>

      <p>Twelve lifts covering every major muscle group.</p>

      <Suspense
        fallback={
          <div className="mt-6 grid grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkoutSkeleton key={index} />
            ))}
          </div>
        }
      >
        <LibraryContent />
      </Suspense>
    </section>
  );
}