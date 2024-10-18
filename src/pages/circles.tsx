import CircleList from "@/components/circles/circle-list";
import CircleListSkeleton from "@/components/circles/circle-list-skeleton";
import CreateCircle from "@/components/circles/create-circle";
import { useCircles } from "@/hooks/circles/use-circles";
import { Outlet } from "react-router-dom";

export default function Circles() {
  const { data, isLoading } = useCircles();

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-end">
        <CreateCircle />
      </div>
      {isLoading && <CircleListSkeleton />}
      {!isLoading && data && <CircleList circles={data?.circles} />}
      <Outlet />
    </div>
  );
}
