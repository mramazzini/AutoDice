'use client';
import { userContentPacks } from '@/lib/actions/db/get.actions';
import { useEffect, useState } from 'react';

enum Tab {
  NONE,
  CLASS,
  RACE,
  BACKGROUND,
}

const characterCreatorPage = () => {
  const [contentPacks, setContentPacks] = useState<any[]>([]);
  const [activePacks, setActivePacks] = useState<any[]>([]);
  const [tab, setTab] = useState<Tab>(Tab.NONE);
  useEffect(() => {
    userContentPacks().then((res) => {
      if (res) {
        setContentPacks(res as any[]);
        setActivePacks(res as any[]);
        console.log(res);
      }
    });
  }, []);

  const togglePack = (pack: any) => {
    if (activePacks.includes(pack)) {
      setActivePacks(activePacks.filter((p) => p.id !== pack.id));
    } else {
      setActivePacks([...activePacks, pack]);
    }
    console.log(activePacks);
  };
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="w-3/4 flex flex-col justify-start items-cencoter ">
        <h1 className="text-3xl font-bold">Character Creator</h1>
        <p className="text-xl text-center">
          Create your own 5e character with our easy to use character creator.
          When your done, it is saved to your account where you can access it in
          the Autodice Engine, or export your character sheet to a PDF and print
          it out!
        </p>
        <div className="division w-full bg-gray-300 h-1 m-3"></div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-1/2 flex flex-col justify-start items-center">
            <h2 className="text-2xl font-bold">Content Packs</h2>
            <p className="text-md text-center">
              Select the content packs you want to use for your character.
            </p>
            {contentPacks.map((pack, index) => {
              return (
                <div
                  onClick={() => togglePack(pack)}
                  key={index}
                  className="flex flex-row justify-start items-center my-2 p-2 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer text-black hover:bg-gray-300"
                >
                  <div
                    className={`h-10 w-1/12 ${
                      activePacks.includes(pack) ? 'bg-green-500' : 'bg-red-500'
                    } rounded-lg mr-2`}
                  ></div>

                  <p>
                    {pack.name} - {pack.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default characterCreatorPage;
