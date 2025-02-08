import { Suspense } from "react";
import { CategoryContainer } from "./_components/CategoryContainer";

const Category = () => {
  return (
    <Suspense>
      <CategoryContainer />
    </Suspense>
  );
};
export default Category;
