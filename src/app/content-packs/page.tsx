"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContentPack } from "@prisma/client";
interface ContentPacksProps extends ContentPack {
  monsters: Array<any>;
  races: Array<any>;
  classes: Array<any>;
  backgrounds: Array<any>;
  spells: Array<any>;
  maps: Array<any>;
  npcs: Array<any>;
}

export default function ContentPacks() {
  const [contentPacks, setContentPacks] = useState<ContentPacksProps[]>([]);
  useEffect(() => {
    fetch("/api/db/content-packs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContentPacks(data);
      });
  }, []);

  return (
    <div className="w-full min-h-screen justify-start items-center flex flex-col">
      <div className="w-3/4  mt-10 ">
        <div className="w-full flex-row flex justify-between bg-white rounded-lg p-5 text-black">
          <div className="w-1/4 p-5">
            <h1 className="text-3xl font-bold">Content Packs</h1>
            <p className="text-xl">
              Monsters and items and spells, oh my! Here you can find all the
              content packs you have access to.
            </p>
          </div>

          <div className="w-2/4 p-5">
            <h1 className="text-3xl font-bold">Need more?</h1>
            <p className="text-xl py-2 mb-3">
              Create your own content packs and share them with the world, or
              head over to the marketplace to find more.
            </p>
            <Link
              href="/market"
              className="bg-blue-500 p-3 rounded-lg my-3 mr-5"
            >
              Market
            </Link>
            <Link href="/create" className="bg-blue-500 p-3 rounded-lg my-3 ">
              Create Content Pack
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col mt-5">
          <div className="w-full flex flex-col justify-between">
            <h1 className="text-3xl font-bold">Your Content Packs</h1>
            <div className="division w-full bg-gray-300 h-1"></div>
          </div>
          <div className="w-full flex flex-col ">
            {contentPacks.map((pack: ContentPacksProps, index: number) => (
              <div
                className="w-full bg-white rounded-lg p-5 text-black my-5 mx-2 flex-row flex"
                key={index}
              >
                <div className="w-1/3">
                  <h1 className="text-2xl font-bold">{pack.name}</h1>
                  <p className="text-xl">{pack.description}</p>
                </div>
                <div className="w-1/3 flex flex-col">
                  <h1 className="text-2xl font-bold">Content</h1>
                  <p className="text-xl">
                    Monsters: {pack.monsters.length} | Classes:{" "}
                    {pack.classes.length} | Backgrounds:{" "}
                    {pack.backgrounds.length} | Spells: {pack.spells.length} |
                    Maps: {pack.maps.length} | Races: {pack.races.length}
                  </p>
                </div>
                <Link
                  href={`/content-packs:${pack.id}`}
                  className="bg-blue-500 p-3  rounded-lg my-3 ml-auto"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
