import React from "react";
import { useCreateCircle } from "@/hooks/circles/use-create-circle";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function CreateCircle() {
  const { mutate: createCircle } = useCreateCircle();

  const [circleName, setCircleName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateCircle = () => {
    createCircle(
      { name: circleName },
      {
        onSuccess: () => {
          toast.success("Circle created successfully");
          setIsDialogOpen(false);
          setCircleName("");
        },
      }
    );
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Create Circle
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Circle</DialogTitle>
        </DialogHeader>
        <div>
          <Input
            value={circleName}
            onChange={(e) => setCircleName(e.target.value)}
            placeholder="Circle Name"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleCreateCircle}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
