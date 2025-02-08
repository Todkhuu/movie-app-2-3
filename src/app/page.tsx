import { Popular } from "./_components/Popular";
import { Toprated } from "./_components/Toprated";
import { Upcoming } from "./_components/Upcoming";
import { UpcomingTop } from "./_components/UpcomingTop";

export default function Home() {
  return (
    <div>
      <UpcomingTop />
      <Upcoming />
      <Popular />
      <Toprated />
    </div>
  );
}
