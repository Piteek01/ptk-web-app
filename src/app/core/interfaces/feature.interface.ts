export interface Feature {
  id: string;
  label: string;
  path: string;
  icon?: string;
  features?: Feature[];
  // permissions?: FeaturePermission[];
}
