"use client";

import { Suspense } from "react";
import Genres from "./_components/Genre";

export default function GenrePage() {
  return (
    <Suspense>
      <Genres />
    </Suspense>
  );
}
