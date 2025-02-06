import Similar from "./similar/page";

const Similars = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  return <Similar categoryId={categoryId} />;
};
export default Similars;
