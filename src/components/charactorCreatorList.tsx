'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { use, useEffect } from 'react';

export function CharacterCreatorList({
  tags,
  setSelected,
  selected,
}: {
  tags: any[];
  setSelected: (value: number) => void;
  selected: number;
}) {
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return tags.map((tag) => (
    <div key={tag.id} onClick={() => setSelected(tag.id)}>
      <div className="text-sm font-medium leading-none cursor-pointer hover:text-green-500 transition-colors duration-200 ease-in-out">
        <div
          className={`flex justify-between items-center ${
            selected === tag.id ? 'text-green-500' : ''
          }`}
        >
          <div>{tag.name}</div>
        </div>
      </div>
      <Separator className="my-2" />
    </div>
  ));
}
