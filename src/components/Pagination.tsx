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
import { useRouter } from "next/navigation";

export const Paginations = ({
  page,
  ids,
  value,
}: {
  page?: string;
  ids: string;
  value?: string;
}) => {
  const router = useRouter();
  const pages = Number(page) || 1;
  return (
    <Pagination className="my-[32px]">
      <PaginationContent>
        {pages > 1 ? (
          <>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  router.push(
                    `?page=${pages - 1}&genreIds=${ids}&value=${value}`
                  )
                }
              />
            </PaginationItem>
            <PaginationItem
              onClick={() =>
                router.push(`?page=${pages - 1}&genreIds=${ids}&value=${value}`)
              }
            >
              <PaginationLink>{pages - 1}</PaginationLink>
            </PaginationItem>
          </>
        ) : (
          ""
        )}
        <PaginationItem>
          <PaginationLink isActive>{pages}</PaginationLink>
        </PaginationItem>
        <PaginationItem
          onClick={() =>
            router.push(`?page=${pages + 1}&genreIds=${ids}&value=${value}`)
          }
        >
          <PaginationLink>{pages + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {pages < 10 ? (
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                router.push(`?page=${pages + 1}&genreIds=${ids}&value=${value}`)
              }
            />
          </PaginationItem>
        ) : (
          ""
        )}
      </PaginationContent>
    </Pagination>
  );
};
