'use client';
import { contentPacks } from '@/lib/actions/db/get.actions';
import { useEffect } from 'react';

const characterCreatorPage = () => {
  useEffect(() => {
    contentPacks().then((res) => {
      console.log(res);
    }),
      [];
  });
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div className="w-3/4 flex flex-col justify-start items-center ">
        <h1 className="text-3xl font-bold">Character Creator</h1>
        <div className="division w-full bg-gray-300 h-1"></div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-1/2 flex flex-col justify-start items-center">
            <h2 className="text-2xl font-bold">Character Name</h2>
            <input
              type="text"
              className="w-1/2 border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-center">
            <h2 className="text-2xl font-bold">Character Class</h2>
            <select className="w-1/2 border border-gray-300 rounded-md p-2">
              <option value="barbarian">Barbarian</option>
              <option value="bard">Bard</option>
              <option value="cleric">Cleric</option>
              <option value="druid">Druid</option>
              <option value="fighter">Fighter</option>
              <option value="monk">Monk</option>
              <option value="paladin">Paladin</option>
              <option value="ranger">Ranger</option>
              <option value="rogue">Rogue</option>
              <option value="sorcerer">Sorcerer</option>
              <option value="warlock">Warlock</option>
              <option value="wizard">Wizard</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default characterCreatorPage;
