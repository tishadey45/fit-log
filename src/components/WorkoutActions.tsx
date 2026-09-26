"use client";

import { IWorkout } from "@/types/library.type";
import { usePlan } from "@/context/PlanContext";
import { MdAddCard } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import toast from "react-hot-toast";

interface WorkoutActionsProps {
  workout: IWorkout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveForLater,
  } = usePlan();

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan");
    } else {
      toast.error("Already in today's plan");
    }
  };

  const handleSaveForLater = () => {
    const saved = saveForLater(workout);

    if (saved) {
      toast.success("Saved for later");
    } else {
      toast.error("Already saved");
    }
  };

  return (
    <div className="card-actions mt-6">

      <button
        onClick={handleAddToPlan}
        className="btn bg-lime-500 hover:bg-lime-600 text-black rounded-2xl flex-1"
      >
        <MdAddCard className="text-lg" />
        Add to todays plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="btn btn-outline rounded-2xl flex-1"
      >
        <BsBookmark />
        Save for later
      </button>

    </div>
  );
}
