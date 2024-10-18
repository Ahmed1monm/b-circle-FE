import CircleList from "@/components/circles/circle-list";
import CreateCircle from "@/components/circles/create-circle";
import { useCircles } from "@/hooks/circles/use-circles";

export default function Circles() {
  const { data } = useCircles();

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex justify-end">
        <CreateCircle />
      </div>
      <CircleList circles={data?.circles} />
    </div>
  );
}
