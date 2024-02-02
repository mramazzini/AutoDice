import {
  createRace,
  createBackground,
  createClass,
  createContentPack,
  createFeature,
} from '@/lib/actions/db/create.actions';
import chalk from 'chalk';
import { clearDB } from './destroy.actions';
import data from '@/seeds';
import { text } from 'stream/consumers';

const { classData, backgroundData, raceData, featureData } = data;

chalk.level = 1;
const logblue = (text: string) => console.log(chalk.blue(text));
const loggreen = (text: string) => console.log(chalk.green(text));
const logerror = (text: string) => console.log(chalk.red(text));
export const seed = async () => {
  'use server';
  try {
    loggreen('\nRequest received to seed database...\n');

    logblue('Clearing database...\n');
    await clearDB();

    logblue('Seeding database...\n');

    logblue('Creating SRD ContentPack...\n');
    const pack = await createContentPack({
      name: 'SRD ContentPack',
      description: 'Free DND 5e content from the SRD',
      default: true,
    });
    const packId = pack.id;

    logblue('\nCreating classes...\n');
    for (let i = 0; i < classData.length; i++) {
      classData[i].contentPackId = packId;
      await createClass(classData[i]);
    }

    logblue('\nCreating features...\n');
    for (let i = 0; i < featureData.length; i++) {
      featureData[i].contentPackId = packId;
      await createFeature(featureData[i]);
    }

    logblue('\nCreating backgrounds...\n');
    for (let i = 0; i < backgroundData.length; i++) {
      backgroundData[i].contentPackId = packId;
      await createBackground(backgroundData[i]);
    }

    logblue('\nCreating races...\n');
    for (let i = 0; i < raceData.length; i++) {
      raceData[i].contentPackId = packId;
      await createRace(raceData[i]);
    }

    loggreen('\nSeeding complete!');
  } catch (err: any) {
    logerror(err);
  }
};
