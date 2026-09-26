"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const { plannedWorkouts, savedWorkouts } = usePlan();

  return (
    <nav className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">

        <div className="navbar-start">


          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">
                  Workouts
                </Link>
              </li>

              <li>
                <Link href="/my-plan?tab=plan">
                  My Plan
                </Link>
              </li>

              <li>
                <Link href="/my-plan?tab=saved">
                  Saved
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src={logo}
              alt="FITLOG logo"
              width={50}
              height={50}
            />

            <h1 className="text-lg font-bold ml-3">
              FITLOG
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">
                Workouts
              </Link>
            </li>

            <li>
              <Link href="/my-plan?tab=plan">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">

          <Link
            href="/my-plan?tab=plan"
            className="btn btn-sm"
          >
            Plan

            {plannedWorkouts.length > 0 && (
              <span className="badge  bg-lime-500">
                {plannedWorkouts.length}
              </span>
            )}
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="btn btn-sm  "
          >
            Saved

            {savedWorkouts.length > 0 && (
              <span className="badge  bg-lime-500">
                {savedWorkouts.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}
