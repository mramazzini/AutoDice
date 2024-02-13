import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
type StatKey =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';
const StatCard = ({
  statName,
  value,
  description,
  primaryClasses,
  skills,
  setStats,
}: {
  statName: StatKey;
  value: number;
  description: string;
  primaryClasses: string[];
  skills: string[];
  setStats: (stat: StatKey, val: number) => void;
}) => {
  const calcBonus = (value: number) => {
    return Math.floor((value - 10) / 2);
  };
  return (
    <Card className="w-3/4 m-4 p-3">
      <div className="flex flex-row w-full justify-center items-center">
        <div className="flex flex-col w-3/4 ">
          <CardHeader>
            <CardTitle style={{ textTransform: 'capitalize' }}>
              {statName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <input
              className="w-1/2 p-2 mb-4 border-2 border-black rounded-md"
              type="number"
              value={value}
              onChange={(e) => setStats(statName, parseInt(e.target.value))}
            />
            <div className="flex flex-col justify-around w-full mb-3">
              <h3 className="font-bold">Primary Classes: </h3>
              {primaryClasses.map((c) => (
                <span key={c}>- {c}</span>
              ))}
            </div>
            <div className="flex flex-col justify-around w-full">
              <h3 className="font-bold">Skills: </h3>
              {skills.map((s) => (
                <span key={s}>- {s}</span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <CardDescription>{description}</CardDescription>
          </CardFooter>
        </div>
        <div className="flex flex-col w-1/4 justify-center items-center">
          <h3 className="text-2xl font-bold">Bonus</h3>
          <h4 className="text-3xl font-bold">
            {calcBonus(value) >= 1 ? '+' : ''}
            {calcBonus(value)}
          </h4>
        </div>
      </div>
    </Card>
  );
};
export default StatCard;
