export interface IFeature {
  id: string;
  label: string;
  path: string;
  icon?: string;
  features?: IFeature[];
  // permissions?: FeaturePermission[];
}
