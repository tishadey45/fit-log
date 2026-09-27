export default function LibrarySkeleton() {
  return (
    <div className="h-full overflow-hidden rounded-2xl bg-[#111] shadow-md">
      {/* Image Skeleton */}
      <div className="skeleton h-56 w-full rounded-none bg-gray-700"></div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="mb-3 flex gap-2">
          <div className="skeleton h-6 w-20 rounded-full bg-gray-700"></div>
          <div className="skeleton h-6 w-24 rounded-full bg-gray-700"></div>
        </div>

        {/* Workout Name */}
        <div className="skeleton h-7 w-3/4 rounded bg-gray-700"></div>

        {/* Equipment */}
        <div className="mt-4 flex items-center gap-2">
          <div className="skeleton h-4 w-4 rounded bg-gray-700"></div>
          <div className="skeleton h-4 w-28 rounded bg-gray-700"></div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2">
            <div className="skeleton h-4 w-4 rounded bg-gray-700"></div>
            <div className="skeleton h-4 w-12 rounded bg-gray-700"></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="skeleton h-4 w-4 rounded bg-gray-700"></div>
            <div className="skeleton h-4 w-12 rounded bg-gray-700"></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="skeleton h-4 w-4 rounded bg-gray-700"></div>
            <div className="skeleton h-4 w-12 rounded bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}