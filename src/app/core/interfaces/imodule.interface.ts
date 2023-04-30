import { IFeature } from './ifeature.interface';

export interface IModule {
  id?: string;
  title: string;
  url?: string;
  features?: IFeature[];
}
