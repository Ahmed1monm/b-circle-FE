import { useCircle } from "@/hooks/circles/use-circle";
import { useParams } from "react-router-dom";

export default function Circle() {
    const { circleId } = useParams<{ circleId: string }>();
    const { data: circle, isError } = useCircle(circleId as string);

    if (!circle) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching circle data</div>;
    }

    return (
        <div>
            <h1>{circle.name}</h1>
        </div>
    );
}