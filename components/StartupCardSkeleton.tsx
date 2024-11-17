import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

function StartupCardSkeleton() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeleton", index)}>
          <Skeleton className="startup-card_skeleton" />
        </li>
      ))}
    </>
  );
}
export default StartupCardSkeleton;
