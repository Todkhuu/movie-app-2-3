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
import { useRouter, useSearchParams } from "next/navigation";

export const Paginations = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
  const value = searchParams.get("value") || null;
  return (
    <Pagination className="my-[32px]">
      <PaginationContent>
        {Number(page) > 1 ? (
          <>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  router.push(
                    `?page=${
                      Number(page) - 1
                    }&genreIds=${genreIds}&value=${value}`
                  )
                }
              />
            </PaginationItem>
            <PaginationItem
              onClick={() =>
                router.push(
                  `?page=${
                    Number(page) - 1
                  }&genreIds=${genreIds}&value=${value}`
                )
              }
            >
              <PaginationLink>{Number(page) - 1}</PaginationLink>
            </PaginationItem>
          </>
        ) : (
          ""
        )}
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem
          onClick={() =>
            router.push(
              `?page=${Number(page) + 1}&genreIds=${genreIds}&value=${value}`
            )
          }
        >
          <PaginationLink>{Number(page) + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {Number(page) < 10 ? (
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                router.push(
                  `?page=${
                    Number(page) + 1
                  }&genreIds=${genreIds}&value=${value}`
                )
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
