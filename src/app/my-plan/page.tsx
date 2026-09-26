"use client";

import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

type Tab = "plan" | "saved";
type SortBy = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const { plannedWorkouts, savedWorkouts, removeFromPlan, removeFromSaved } =
    usePlan();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortBy>("duration");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveTab(params.get("tab") === "saved" ? "saved" : "plan");
  }, []);

  const workouts = activeTab === "plan" ? plannedWorkouts : savedWorkouts;

  // Sort current workout list
  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => Number(b.duration) - Number(a.duration));
    } else if (sortBy === "calories") {
      sorted.sort((a, b) => Number(b.duration) * 8 - Number(a.duration) * 8);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return sorted;
  }, [workouts, sortBy]);

  const stats = useMemo(() => {
    return workouts.reduce(
      (acc, workout) => {
        acc.minutes += Number(workout.duration) || 0;
        acc.calories += Math.round((Number(workout.duration) || 0) * 8);

        return acc;
      },
      {
        minutes: 0,
        calories: 0,
      },
    );
  }, [workouts]);

  return (
    <main className="min-h-screen bg-base-300 text-base-content">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-base-content/50">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 overflow-hidden rounded-xl border border-base-content/10 bg-base-200 sm:grid-cols-3">
          <div className="border-base-content/10 px-6 py-6 sm:border-r">
            <p className="text-xs text-base-content/50">Exercises</p>

            <p className="mt-1 text-3xl font-black text-lime-400">
              {workouts.length}
            </p>
          </div>

          <div className="border-base-content/10 px-6 py-6 sm:border-r">
            <p className="text-xs text-base-content/50">Minutes</p>

            <p className="mt-1 text-3xl font-black">{stats.minutes}</p>
          </div>

          <div className="px-6 py-6">
            <p className="text-xs text-base-content/50">Calories</p>

            <p className="mt-1 text-3xl font-black">{stats.calories}</p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-5 flex items-center justify-between">
          <div className="tabs tabs-boxed rounded-xl bg-base-200 p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`tab h-8 rounded-lg px-4 text-xs ${
                activeTab === "plan" ? "tab-active bg-base-100" : ""
              }`}
            >
              Today&apos;s Plan
              <span className="badge badge-sm ml-2">
                {plannedWorkouts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`tab h-8 rounded-lg px-4 text-xs ${
                activeTab === "saved" ? "tab-active bg-base-100" : ""
              }`}
            >
              Saved
              <span className="badge badge-sm ml-2">
                {savedWorkouts.length}
              </span>
            </button>
          </div>

          {/* Sort By */}
          <div className="hidden items-center whitespace-nowrap text-xs text-base-content/50 sm:flex">
            <span className="shrink-0">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="select select-bordered select-xs ml-2 w-auto bg-base-200"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State / Workout List */}
        {workouts.length === 0 ? (
          <div className="rounded-xl border border-base-content/10 bg-base-200 py-20 text-center">
            <h2 className="text-xl font-black">
              {activeTab === "plan" ? "NOTHING HERE YET" : "NO SAVED WORKOUTS"}
            </h2>

            <p className="mt-2 text-sm text-base-content/50">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Save workouts that you want to do later."}
            </p>

            <Link
              href="/workout"
              className="btn mt-5 rounded-lg border-0 bg-lime-400 px-6 text-black hover:bg-lime-300"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex min-h-22 items-center gap-4 rounded-xl border border-base-content/10 bg-base-200 p-3 transition hover:border-base-content/20"
              >
                {/* Image */}
                <div className="h-16 w-28 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Workout Info */}
                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-sm font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="text-xs text-base-content/50">
                    {workout.difficulty}
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-base-content/60">
                    <span>
                      <span className="text-lime-400">◷</span>{" "}
                      {workout.duration} min
                    </span>

                    <span>
                      <span className="text-lime-400">🔥</span>{" "}
                      {Math.round(Number(workout.duration) * 8)} kcal
                    </span>

                    <span>
                      <span className="text-lime-400">★</span> {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="btn btn-sm hidden rounded-full border-base-content/20 bg-transparent px-5 text-xs font-normal sm:flex"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => {
                      toast.success(`${workout.name} marked as done!`);
                    }}
                    className="btn btn-sm rounded-full border-0 bg-lime-400 px-4 text-xs font-bold text-black hover:bg-lime-300"
                  >
                    <span>✓</span>

                    <span className="hidden sm:inline">Mark as Done</span>

                    <span className="sm:hidden">Done</span>
                  </button>

                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(workout.id);

                        toast.success(`${workout.name} removed from plan`);
                      } else {
                        removeFromSaved(workout.id);

                        toast.success(`${workout.name} removed from saved`);
                      }
                    }}
                    aria-label={`Remove ${workout.name}`}
                    className="btn btn-ghost btn-sm px-1 text-lg text-base-content/40 hover:text-error"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
