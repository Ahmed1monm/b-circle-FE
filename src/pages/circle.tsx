import { Button } from "@/components/ui/button";
import { useCircle } from "@/hooks/circles/use-circle";
import { Circle as CircleIcon, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function Circle() {
  const { circleId } = useParams<{ circleId: string }>();
  const { data, isError } = useCircle(circleId as string);
  const circle = data?.circle;

  if (!circle) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching circle data</div>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl flex gap-2 items-center">
          <CircleIcon />
          {circle.circleName}
        </h1>

        <Link to={`/blogs/new?circleId=${circleId}`}>
          <Button variant="outline" size={"lg"}><Plus className="mr-2 h-4 w-4" />Create Blog for this Circle</Button>
        </Link>
           
      </div>
    </div>
  );
}
