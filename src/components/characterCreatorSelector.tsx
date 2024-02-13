'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { use, useEffect } from 'react';
import { CharacterCreatorList } from '@/components/charactorCreatorList';
export function CharacterCreatorSelector({
  title,
  packs,
  setSelected,
  selected,
  tagName,
}: {
  title: string;
  packs: any[];
  setSelected: (value: number) => void;
  selected: number;
  tagName: string;
}) {
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <ScrollArea className="min-h-96 w-72 rounded-md border">
      <div className="p-4">
        <h4 className="text-2xl font-bold text-center">{title}</h4>
        <Separator className="my-2" />
        {packs.map((pack) => (
          <div key={pack.id}>
            <h5 className="text-xl font-bold text-center">{pack.name}</h5>
            <Separator className="my-2" />
            <div key={pack.id}>
              <CharacterCreatorList
                tags={pack[tagName]}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
