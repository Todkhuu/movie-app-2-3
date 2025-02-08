import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CiPlay1 } from "react-icons/ci";
import { getData } from "@/utils/data";

export const DialogDemo = async ({ id }: { id: string }) => {
  const trailer = await getData(`/movie/${id}/videos?language=en-US`);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-[12px]">
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
          src={`https://www.youtube.com/embed/${trailer.results[0]?.key}`}
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};
