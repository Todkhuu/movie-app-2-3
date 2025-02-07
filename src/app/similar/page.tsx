"use client";

import { Suspense } from "react";
import Similars from "./_components/Similar";

const Similar = () => {
  return (
    <Suspense>
      <Similars />
    </Suspense>
  );
};
export default Similar;
