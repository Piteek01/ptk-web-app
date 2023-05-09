import { Feature } from './feature.interface';

export interface IModule {
  id?: string;
  title: string;
  path?: string;
  features?: Feature[];
}
