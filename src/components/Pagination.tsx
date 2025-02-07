"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Paginations = ({ page }: { page?: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value);
    replace(`${pathname}?${params.toString()}`);
  };

  const pages = Number(page) || 1;

  return (
    <Pagination className="my-[32px]">
      <PaginationContent>
        {pages > 1 ? (
          <>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  handleClick((pages - 1).toString());
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  handleClick((pages - 1).toString());
                }}
              >
                {pages - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : (
          ""
        )}
        <PaginationItem>
          <PaginationLink isActive>{pages}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handleClick((pages + 1).toString());
            }}
          >
            {pages + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {pages < 10 ? (
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                handleClick((pages + 1).toString());
              }}
            />
          </PaginationItem>
        ) : (
          ""
        )}
      </PaginationContent>
    </Pagination>
  );
};
