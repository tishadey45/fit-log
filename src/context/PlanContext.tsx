"use client";

import { IWorkout } from "@/types/library.type";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface PlanContextType {
  plannedWorkouts: IWorkout[];
  savedWorkouts: IWorkout[];

  addToPlan: (workout: IWorkout) => boolean;
  saveForLater: (workout: IWorkout) => boolean;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<IWorkout[]>([]);

  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

 
  useEffect(() => {
    const planned = localStorage.getItem("plannedWorkouts");
    const saved = localStorage.getItem("savedWorkouts");

    if (planned) {
      setPlannedWorkouts(JSON.parse(planned));
    }

    if (saved) {
      setSavedWorkouts(JSON.parse(saved));
    }
  }, []);

  // Add to Today's Plan
  const addToPlan = (workout: IWorkout) => {
    const exists = plannedWorkouts.some((item) => item.id === workout.id);

    if (exists) {
      return false;
    }

    const updated = [...plannedWorkouts, workout];

    setPlannedWorkouts(updated);

    localStorage.setItem("plannedWorkouts", JSON.stringify(updated));

    return true;
  };

  // Save for later
  const saveForLater = (workout: IWorkout) => {
    const exists = savedWorkouts.some((item) => item.id === workout.id);

    if (exists) {
      return false;
    }

    const updated = [...savedWorkouts, workout];

    setSavedWorkouts(updated);

    localStorage.setItem("savedWorkouts", JSON.stringify(updated));

    return true;
  };

  // Remove from Today's Plan
  const removeFromPlan = (id: number) => {
    const updated = plannedWorkouts.filter((item) => item.id !== id);

    setPlannedWorkouts(updated);

    localStorage.setItem("plannedWorkouts", JSON.stringify(updated));
  };

  // Remove from Saved
  const removeFromSaved = (id: number) => {
    const updated = savedWorkouts.filter((item) => item.id !== id);

    setSavedWorkouts(updated);

    localStorage.setItem("savedWorkouts", JSON.stringify(updated));
  };

  return (
    <PlanContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};
