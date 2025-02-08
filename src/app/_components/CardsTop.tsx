import { Button } from "@/components/ui/button";
import { VscArrowRight } from "react-icons/vsc";

export const CardsTop = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-[24px] font-semibold">{text}</h2>
      <Button variant={"link"} className="text-[14px] flex items-center gap-1">
        See more <VscArrowRight className="w-[16px] h-[16px]" />
      </Button>
    </div>
  );
};
