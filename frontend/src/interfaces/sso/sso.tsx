export class SSOConfig {
  id: string = "";
  note: string = "";
  domain: string = "";
  file: string = "";
  created_at: number = 0;
  updated_at: number = 0;
}

export class TokenConfig {
  token_id: string = "";
  license_id: string = "";
  domain: string = "";
  expired_at: number = 0;
  status: number = 0;
  subscribers: string = "";
  jwt_token: string = "";
  created_at: number = 0;
  updated_at: number = 0;
  note: string = "";
}

export class LicenseConfig {
  license_id: string = "";
  domain: string = "";
  email_address: string = "";
  email_domain: string = "";
  created_at: number = 0;
  updated_at: number = 0;
  expired_at: number = 0;
  ignore_email: string = "";
  note: string = "";
}

export class AppUser {
  id: string = "";
  email: string = "";
  display_name: string = "";
  institution: string = "";
  domain: string = "";
  created_at: number = 0;
  updated_at: number = 0;
  hub_user: string = "";
}
