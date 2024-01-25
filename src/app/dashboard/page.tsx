import notfound from "../../../public/notfound.png";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="w-full justify-center items-center min-h-screen flex flex-col ">
      <h1 className="text-4xl font-bold">Welcome back!</h1>
      <div className="grid  grid-cols-3 gap-4 w-2/3 mt-10">
        <a
          href="/packs"
          className=" group flex flex-col bg-white text-black rounded-xl p-5"
        >
          <h1 className="text-3xl font-bold ">Content Packs</h1>
          <Image src={notfound} alt="Content Packs" className="w-full"></Image>
          <p>
            Create content packs to add to your 5e campaigns, or purchase packs
            from other creators.
          </p>
          <h2 className="text-2xl font-bold mt-5 group-hover:text-blue-500 ">
            Take me there!
          </h2>
          <div className="w-full h-1 bg-blue-500 rounded-full mt-5 group-hover:bg-blue-500 transition-all duration-300 ease-in-out"></div>
        </a>
        <a
          href="/packs"
          className="flex flex-col bg-white text-black rounded-xl p-5"
        >
          <h1 className="text-3xl font-bold ">Creator Studio</h1>
          <p>Create</p>
        </a>
        <a
          href="/packs"
          className="flex flex-col bg-white text-black rounded-xl p-5"
        >
          <h1 className="text-3xl font-bold ">Content Packs</h1>
          <p>
            Organize your content into packs to make it easier to manage and
            distribute with other AutoDice users.
          </p>
        </a>
        <a
          href="/packs"
          className="flex flex-col bg-white text-black rounded-xl p-5"
        >
          <h1 className="text-3xl font-bold ">Content Packs</h1>
          <p>
            Organize your content into packs to make it easier to manage and
            distribute with other AutoDice users.
          </p>
        </a>
      </div>
    </div>
  );
}
