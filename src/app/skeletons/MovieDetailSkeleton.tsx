import { Skeleton } from "@/components/ui/skeleton";

export const MovieTopSkeleton = () => {
  return (
    <div className="max-w-[1080px] m-auto flex justify-between">
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[211px] h-[40px] rounded-full" />
        <Skeleton className="w-[237px] h-[28px] rounded-full" />
      </div>
      <div>
        <p className="text-[12px]">Rating</p>
        <Skeleton className="w-[83px] h-[20px] rounded-full mt-[4px]" />
        <Skeleton className="w-[83px] h-[16px] rounded-full mt-[8px]" />
      </div>
    </div>
  );
};

export const MovieTrailerSkeleton = () => {
  return (
    <div className="max-w-[1080px] m-auto flex justify-between mt-[24px]">
      <Skeleton className="w-[290px] h-[428px]" />
      <Skeleton className="w-[760px] h-[428px]" />
    </div>
  );
};

export const MovieCrewsSkeleton = () => {
  return (
    <div className="max-[1080px] m-auto mt-[20px]">
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[100%] h-[22px] rounded-full" />
        <Skeleton className="w-[699px] h-[22px] rounded-full" />
      </div>
      <div className="mt-[20px] flex flex-col gap-[20px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="border-b-[1px] pb-[5px] flex gap-[53px]">
            <Skeleton className="w-[64px] h-[28px] rounded-full" />
            <Skeleton className="w-[360px] h-[28px] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const MovieCardsSkeleton = () => {
  return (
    <div className="max-w-[1280px] m-auto mt-[52px]">
      <div className="flex justify-between">
        <Skeleton className="w-[250px] h-[36px] rounded-full" />
        <Skeleton className="w-[165px] h-[36px] rounded-full" />
      </div>
      <div className="flex flex-wrap gap-[32px] mt-[36px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-[190px] h-[372px]" />
        ))}
      </div>
    </div>
  );
};
