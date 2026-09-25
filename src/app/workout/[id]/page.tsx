import Image from "next/image";
import { IWorkout } from "@/types/library.type";
import { MdAddCard } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

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
            className=" h-full object-cover"
          />
        </div>

     
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">

            <h1 className="text-3xl font-bold uppercase">
              {workout.name}
            </h1>

            <p className="text-base-content/70">
              {workout.description}
            </p>

          
            <div className="flex gap-2 flex-wrap mt-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className=" bg-lime-500 rounded-4xl px-3 py-1"
                >
                  {muscle}
                </span>
              ))}
            </div>

         
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">EQUIPMENT</p>
                <p className="font-semibold">
                  {workout.equipment}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">DIFFICULTY</p>
                <p className="font-semibold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">SETS</p>
                <p className="font-semibold">
                  {workout.sets}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">REPS</p>
                <p className="font-semibold">
                  {workout.reps}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">DURATION</p>
                <p className="font-semibold">
                  {workout.duration} min
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-lg">
                <p className="text-xs opacity-60">CALORIES</p>
                <p className="font-semibold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>
            </div>

    
            <div className="mt-4">
              <p className="text-xs opacity-60">RATING</p>
              <p className="font-bold text-lg">
                ⭐ {workout.rating}
              </p>
            </div>

        
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
                      <span className="">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

         
            <div className="card-actions mt-6">
              <button className="btn  bg-lime-500 rounded-2xl flex-1">
                <MdAddCard />
                 Add to today's plan
              </button>

              <button className="btn btn-outline flex-1 rounded-2xl">
                <BsBookmark />
                 Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}