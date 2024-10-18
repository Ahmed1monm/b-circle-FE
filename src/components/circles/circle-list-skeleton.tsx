import { Skeleton } from "../ui/skeleton";

const CircleListSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="text-lg font-semibold border border-opacity-5 p-4 rounded-md flex items-center justify-between"
      >
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-6 h-6" />
      </div>
    ))}
  </div>
);

export default CircleListSkeleton;