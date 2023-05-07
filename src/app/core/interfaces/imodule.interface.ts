import { IFeature } from './ifeature.interface';

export interface IModule {
  id?: string;
  title: string;
  path?: string;
  features?: IFeature[];
}
