import { IWorkout } from "@/types/library.type";
import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

const getWorkout = async (id: string) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
};

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workout: IWorkout = await getWorkout(id);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">

            <h1 className="text-3xl font-bold uppercase">
              {workout.name}
            </h1>

            <p className="text-base-content/70">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex gap-2 flex-wrap mt-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-lime-500 text-black rounded-full px-3 py-1 text-sm"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Info */}
            <div className="mt-5 rounded-lg overflow-hidden bg-base-200">

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  EQUIPMENT
                </p>

                <p className="text-sm font-medium">
                  {workout.equipment}
                </p>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  DIFFICULTY
                </p>

                <p className="text-sm font-medium">
                  {workout.difficulty}
                </p>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  SETS
                </p>

                <p className="text-sm font-medium">
                  {workout.sets}
                </p>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  REPS
                </p>

                <p className="text-sm font-medium">
                  {workout.reps}
                </p>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  DURATION
                </p>

                <p className="text-sm font-medium">
                  {workout.duration} min
                </p>
              </div>

              <div className="flex justify-between px-4 py-3 border-b border-base-300">
                <p className="text-xs opacity-60">
                  CALORIES
                </p>

                <p className="text-sm font-medium">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="flex justify-between px-4 py-3">
                <p className="text-xs opacity-60">
                  RATING
                </p>

                <p className="font-bold">
                  ⭐ {workout.rating}
                </p>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-xl font-bold mb-3">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-3">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3"
                    >
                      <span className="font-bold text-lime-500">
                        {index + 1}.
                      </span>

                      <span>
                        {instruction}
                      </span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}
