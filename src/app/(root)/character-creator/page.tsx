'use client';
import { userContentPacks } from '@/lib/actions/db/get.actions';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as React from 'react';
import { CharacterCreatorSelector } from '@/components/characterCreatorSelector';
import { Separator } from '@/components/ui/separator';
import StatSelector from '@/components/StatSelector';
const characterCreatorPage = () => {
  const [contentPacks, setContentPacks] = useState<any[]>([]);
  const [activePacks, setActivePacks] = useState<any[]>([]);
  const [activeClass, setActiveClass] = useState<number>(1);
  const [activeRace, setActiveRace] = useState<number>(1);
  const [activeBackground, setActiveBackground] = useState<number>(1);
  const [stats, setStats] = useState({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });
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

  const toggleClass = (id: number) => {
    if (activeClass === id) {
      setActiveClass(0);
    } else {
      setActiveClass(id);
    }
    console.log(activeClass);
  };

  const toggleRace = (id: number) => {
    if (activeRace === id) {
      setActiveRace(0);
    } else {
      setActiveRace(id);
    }
    console.log(activeRace);
  };

  const toggleBackground = (id: number) => {
    if (activeBackground === id) {
      setActiveBackground(0);
    }
    setActiveBackground(id);
    console.log(activeBackground);
  };

  const toggleStat = (stat: string, value: number) => {
    setStats({ ...stats, [stat]: value });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="w-3/4 flex flex-col justify-start items-cencoter ">
        <h1 className="text-3xl font-bold text-center">Character Creator</h1>
        <p className="text-xl text-center">
          Create your own 5e character with our easy to use character creator.
          When your done, it is saved to your account where you can access it in
          the Autodice Engine, or export your character sheet to a PDF and print
          it out!
        </p>
        <div className="division w-full bg-gray-300 h-1 m-3"></div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="packs">Content Packs</TabsTrigger>
            <TabsTrigger value="class">Class</TabsTrigger>
            <TabsTrigger value="race">Race</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          <TabsContent value="packs">
            <div className="flex flex-col justify-start items-center w-full">
              <h1 className="text-2xl font-bold text-center">Content Packs</h1>
              <p className="text-xl text-center">
                Content Packs are groups of dnd content that hold classes,
                races, backgrounds, and more. You can select which content packs
                you want to use in your character creator.
              </p>
              <div className="division w-full bg-gray-300 h-1 m-3"></div>
              <div className="flex flex-col justify-start items-center w-full">
                {contentPacks.map((pack) => (
                  <div
                    key={pack.id}
                    onClick={() => togglePack(pack)}
                    className={`w-full flex justify-between bg-black items-center p-3 m-3 border-2 border-black rounded-md cursor-pointer
                     ${
                       activePacks.includes(pack)
                         ? 'text-green-500'
                         : 'text-gray-500'
                     }`}
                  >
                    <h1 className="text-xl font-bold">{pack.name}</h1>
                    <p className="text-lg">{pack.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="class">
            <div className="flex flex-col justify-start items-center w-full">
              <h1 className="text-2xl font-bold text-center">
                Class Selection
              </h1>
              <p className="text-xl text-center">
                Choose your character's class. This will determine your
                characters abilities and skills.
                <br />
                <Link
                  href="/"
                  className="font-bold text-3xl hover:text-green-500"
                >
                  Learn more
                </Link>
                <Separator className="my-2" />
              </p>
              <div className="flex flex-row  items-center w-full">
                <CharacterCreatorSelector
                  packs={activePacks}
                  selected={activeClass}
                  setSelected={(id: number) => toggleClass(id)}
                  title="Classes"
                  tagName="classes"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="race">
            <div className="flex flex-col justify-start items-center w-full">
              <h1 className="text-2xl font-bold text-center">Race Selection</h1>
              <p className="text-xl text-center">
                Choose your character's race. This determines certain abilities
                and appearance.
                <br />
                <Link
                  href="/"
                  className="font-bold text-3xl hover:text-green-500"
                >
                  Learn more
                </Link>
                <Separator className="my-2" />
              </p>
              <div className="flex flex-row  items-center w-full">
                <CharacterCreatorSelector
                  packs={activePacks}
                  selected={activeRace}
                  setSelected={(id: number) => toggleRace(id)}
                  title="Races"
                  tagName="races"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="background">
            <div className="flex flex-col justify-start items-center w-full">
              <h1 className="text-2xl font-bold text-center">
                Background Selection
              </h1>
              <p className="text-xl text-center">
                Choose your character's background. This determines your
                characters backstory and starting equipment.
                <br />
                <Link
                  href="/"
                  className="font-bold text-3xl hover:text-green-500"
                >
                  Learn more
                </Link>
                <Separator className="my-2" />
              </p>
              <div className="flex flex-row  items-center w-full">
                <CharacterCreatorSelector
                  packs={activePacks}
                  selected={activeBackground}
                  setSelected={(id: number) => toggleBackground(id)}
                  title="Backgrounds"
                  tagName="backgrounds"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="stats">
            <div className="flex flex-col justify-start items-center w-full">
              <h1 className="text-2xl font-bold text-center">Stats</h1>
              <p className="text-xl text-center">
                Your characters Stats determine your ability to do everything.
                You have 27 points to spend on your stats. You can increase a
                stat by 1 for 1 point, up to a max of 15 (before racial
                bonuses). Each stat is important, but some are more important
                depending on your selected class. <br />
                <Separator className="my-2" />
              </p>

              <StatSelector stats={stats} setStat={toggleStat} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default characterCreatorPage;
