'use client';
import { useState } from 'react';
import StatCard from './StatCard';
import { Separator } from './ui/separator';
type StatKey =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';
const StatSelector = ({
  stats,
  setStat,
}: {
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  setStat: (stat: string, value: number) => void;
}) => {
  const [points, setPoints] = useState<number>(() => {
    let total = 0;
    total += stats.strength - 8;
    total += stats.dexterity - 8;
    total += stats.constitution - 8;
    total += stats.intelligence - 8;
    total += stats.wisdom - 8;
    total += stats.charisma - 8;
    return 27 - total;
  });

  const updateStat = (stat: StatKey, val: number) => {
    const difference = val - stats[stat];
    if (val > 15 || val < 8) {
      val = stats[stat];
      return;
    }
    if (difference > 0) {
      if (points - difference >= 0) {
        setPoints(points - difference);
        setStat(stat, val);
      }
    } else {
      setPoints(points - difference);
      setStat(stat, val);
    }
  };
  const calcBonus = (value: number) => {
    return Math.floor((value - 10) / 2);
  };
  return (
    <div className="flex flex-col items-center  justify-center w-full">
      <div className="flex flex-col w-full justify-center items-center">
        <h4 className="text-2xl font-bold text-center">Stat Selector</h4>
        <div className="text-xl font-bold text-center fixed flex flex-col justify-center w-56 p-5 h-1/2 bg-slate-950 top-1/2  left-0 rounded-r-xl border-r border-t border-b border-slate-800">
          <h4>Points Remaining: {points}</h4>
          <Separator className="my-2" />
          <h4 className="text-2xl font-bold">Stats</h4>

          <Separator className="my-2" />
          <div className="flex flex-row">
            <div className="flex flex-col w-1/2 text-center">
              <h4 className="text-xl font-bold">STR:</h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">DEX:</h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">CON:</h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">INT:</h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">WIS:</h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">CHA:</h4>
              <Separator className="my-2" />
            </div>
            <div className="flex flex-col w-1/2">
              <h4 className="text-xl font-bold">
                {stats.strength} ({calcBonus(stats.strength) >= 1 ? '+' : ''}
                {calcBonus(stats.strength)})
              </h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">
                {stats.dexterity} ({calcBonus(stats.dexterity) >= 1 ? '+' : ''}
                {calcBonus(stats.dexterity)})
              </h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">
                {stats.constitution} (
                {calcBonus(stats.constitution) >= 1 ? '+' : ''}
                {calcBonus(stats.constitution)})
              </h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">
                {stats.intelligence} (
                {calcBonus(stats.intelligence) >= 1 ? '+' : ''}
                {calcBonus(stats.intelligence)})
              </h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">
                {stats.wisdom} ({calcBonus(stats.wisdom) >= 1 ? '+' : ''}
                {calcBonus(stats.wisdom)})
              </h4>
              <Separator className="my-2" />
              <h4 className="text-xl font-bold">
                {stats.charisma} ({calcBonus(stats.charisma) >= 1 ? '+' : ''}
                {calcBonus(stats.charisma)})
              </h4>
              <Separator className="my-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-around flex-wrap ">
          <StatCard
            statName="strength"
            value={stats.strength}
            description="Determines how much you can carry and how hard you hit in melee combat."
            primaryClasses={['Barbarian', 'Fighter', 'Paladin']}
            skills={['Athletics']}
            setStats={updateStat}
          />
          <StatCard
            statName="dexterity"
            value={stats.dexterity}
            description="Determines your initiative and how well you can dodge attacks. Also affects your ranged combat."
            primaryClasses={['Rogue', 'Ranger', 'Monk', 'Fighter']}
            skills={['Acrobatics', 'Sleight of Hand', 'Stealth']}
            setStats={updateStat}
          />
          <StatCard
            statName="constitution"
            value={stats.constitution}
            description="Determines your hitpoints and how well you can resist poisons and diseases. Also affects your ability to maintain concentration on spells."
            primaryClasses={['All']}
            skills={['None']}
            setStats={updateStat}
          />
          <StatCard
            statName="intelligence"
            value={stats.intelligence}
            description="Determines how well you can learn and how well you can solve problems. Also affects your ability to cast spells."
            primaryClasses={['Wizard', 'Artificer']}
            skills={[
              'Arcana',
              'History',
              'Investigation',
              'Nature',
              'Religion',
            ]}
            setStats={updateStat}
          />
          <StatCard
            statName="wisdom"
            value={stats.wisdom}
            description="Determines how well you can perceive the world around you and how well you can resist mental attacks. Also affects your ability to cast spells."
            primaryClasses={['Cleric', 'Druid', 'Ranger', 'Monk']}
            skills={[
              'Animal Handling',
              'Insight',
              'Medicine',
              'Perception',
              'Survival',
            ]}
            setStats={updateStat}
          />
          <StatCard
            statName="charisma"
            value={stats.charisma}
            description="Determines the strength of your personality and how well you can influence others. Also affects your ability to cast spells."
            primaryClasses={['Bard', 'Sorcerer', 'Warlock', 'Paladin']}
            skills={['Deception', 'Intimidation', 'Performance', 'Persuasion']}
            setStats={updateStat}
          />
        </div>
      </div>
    </div>
  );
};

export default StatSelector;
