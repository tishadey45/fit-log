import LibraryCard from "@/components/shared/LibraryCard";
import { IWorkout } from "@/types/library.type";

const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

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

export default async function Library() {
  const workouts = await getWorkouts();

  console.log("Workouts in Library:", workouts);

  return (
    <section className="container mx-auto mt-10 mb-20 ">
      <h2 className="text-3xl font-bold md:text-4xl">THE LIBRARY</h2>

      <p>Twelve lifts covering every major muscle group.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {workouts.map((workout) => (
          <LibraryCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
