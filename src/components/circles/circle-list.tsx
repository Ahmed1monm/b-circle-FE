import { ArrowRight } from "lucide-react";
import React from "react";

function CircleList({ circles }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {circles?.map((circle: any) => (
        <div
          key={circle.id}
          className="text-lg font-semibold border p-4 rounded-md flex items-center justify-between"
        >
          {circle.name}
          <ArrowRight />
        </div>
      ))}
    </div>
  );
}

export default CircleList;
