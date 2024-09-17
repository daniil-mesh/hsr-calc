import { Character } from '@/interfaces/character';
import { Enemy } from '@/interfaces/enemy';
import { Summon } from '@/interfaces/summon';

export type Target = Character[] | Enemy[] | Summon[];
