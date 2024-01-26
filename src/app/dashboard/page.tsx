import notfound from "../../../public/notfound.png";

import DashboardLink from "@/components/DashboardLink";
export default function Dashboard() {
  return (
    <div className="w-full justify-center items-center flex flex-col my-5">
      <h1 className="text-4xl font-bold">Welcome back!</h1>
      <div className="grid  grid-cols-4 gap-4 w-3/4 mt-10">
        <DashboardLink
          title="Content Packs"
          description="Create content packs to add to your 5e campaigns, or purchase packs from other creators. These can be implemented into the AutoDice engine to add more content to your campaigns."
          src={notfound}
          alt="Content Packs"
          action="Take me there!"
          link="/packs"
        />
        <DashboardLink
          title="Character Creator"
          description="Create characters for use in the AutoDice engine, or export them to use in your own campaigns."
          src={notfound}
          alt="Character Creator"
          action="Lets get started!"
          link="/character-creator"
        />
        <DashboardLink
          title="DM Tools"
          description="Generate random encounters, treasure, NPC's, monsters, and more!"
          src={notfound}
          alt="Not Found"
          action="Create Now!"
          link="/dm-tools"
        />
        <DashboardLink
          title="AutoDice Engine"
          description="Download the free AutoDice engine to run your campaigns with Steam, or use the web version to play with friends!"
          src={notfound}
          alt="Not Found"
          action="Download Now!"
          link="/autodice"
        />
      </div>
    </div>
  );
}
