import { Popular } from "./_components/Popular";
import { Upcoming } from "./_components/Upcoming";
import { UpcomingTop } from "./_components/UpcomingTop";

export default function Home() {
  return (
    <div>
      <UpcomingTop />
      <Upcoming />
      <Popular />
    </div>
  );
}
