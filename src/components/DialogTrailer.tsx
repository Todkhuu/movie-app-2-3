"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CiPlay1 } from "react-icons/ci";
import { getData } from "@/utils/data";
import { useEffect, useState } from "react";
import { Trailer } from "@/utils/types";

export const DialogDemo = ({ ids }: { ids: string }) => {
  const [trailer, setTrailer] = useState<Trailer>();
  useEffect(() => {
    const fetchData = async () => {
      const trailer = await getData(`/movie/${ids}/videos?language=en-US`);
      setTrailer(trailer.results[0]);
    };
    fetchData();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-[12px] z-[100]">
          <Button
            variant={"outline"}
            className="w-[40px] h-[40px] rounded-full bg-secondary"
          >
            <CiPlay1 className="w-[16px] h-[16px] fill-secondary-foreground" />
          </Button>
          <DialogTitle className="text-white text-[16px] font-normal">
            Play Trailer
          </DialogTitle>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[996px] h-[561px] p-0 overflow-hidden">
        <iframe
          width="996"
          height="561"
          src={`https://www.youtube.com/embed/${trailer?.key}`}
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};
