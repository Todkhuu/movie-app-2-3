import { Skeleton } from "@/components/ui/skeleton";

export const UpcomingTopSkeleton = () => {
  return (
    <div className="">
      <Skeleton className="w-100vw h-[600px]" />
    </div>
  );
};

export const MainPageCardsSkeleton = () => {
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <div className="flex justify-between">
        <Skeleton className="w-[250px] h-[36px] rounded-full" />
        <Skeleton className="w-[165px] h-[36px] rounded-full" />
      </div>
      <div className="flex flex-wrap gap-[32px] mt-[36px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-[229px] h-[439px]" />
        ))}
      </div>
    </div>
  );
};
