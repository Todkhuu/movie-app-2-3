import { Skeleton } from "@/components/ui/skeleton";

export const CategorySkeleton = () => {
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <Skeleton className="w-[200px] h-[45px] rounded-full" />
      <div className="flex flex-wrap gap-[32px] mt-[32px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-[229px] h-[439px]" />
        ))}
      </div>
    </div>
  );
};
