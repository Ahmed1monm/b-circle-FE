import { ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";

function CircleList({ circles }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {circles?.map((circle: any) => (
        <Link to={`/circles/${circle.id}`} key={circle.id}>
          <div className="text-lg font-semibold border p-4 rounded-md flex items-center justify-between hover:ring-1 hover:ring-primary/50 transition-all duration-500 group">
            <div className="flex items-center gap-x-2">
              <Circle />
              {circle.name}
            </div>
            <ArrowRight className="group-hover:text-primary text-primary/50 transition" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CircleList;
