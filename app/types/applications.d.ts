export type Application = {
  id: number;
  application_name: string;
  sku: string;
  boot_codes: string;
  enabled: boolean;
  created_at?: string;
  updated_at?: string;
};
