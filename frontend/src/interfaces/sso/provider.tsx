export class AuthProvider {
  id: string = "";
  app_name: string = "";
  display_name: string = "";
  protocol: string = "";
  type: string = "";
  sub_type: string = "";
  content: string = "";
  status: number = 0;
  order: number = 0;
  allow_domains: string = "";
  callback_url: string = "";
  disable_ssl: number = 0;
  updated_at: number = 0;
  created_at: number = 0;
}

export class SamlProvider {
  type: string = "";
  display_icon: string = "";
  allow_domains: string = "";
  idp_sso_url: string = "";
  idp_issuer_url: string = "";
  idp_x509_public_cert: string = "";
  idp_xml_metadata: string = "";
  idp_metadata_url: string = "";
  sp_callback_url: string = "";
  sp_x509_private_cert: string = "";
  sp_x509_public_cert: string = "";
  sp_issuer_url: string = "";
  sp_assert_consumer_service_url: string = "";
  enable_sign_authn_request: number = 0;
}

export class CustomProvider {
  type: string = "";
  display_icon: string = "";
  allow_domains: string = "";
  login_url: string = "";
  method: string = "";
  extras: string = "";
  token_value: string = "";
  token_key: string = "";
  client_id: string = "";
  client_secret: string = "";
  scope: string = "";
}

export class OpenIdProvider {
  type: string = "";
  display_icon: string = "";
  allow_domains: string = "";
  client_id: string = "";
  client_secret: string = "";
  enable_federation_mode: number = 0;
  authorization_url: string = "";
  token_url: string = "";
  issuer_url: string = "";
  scope: string = "";
  user_info_url: string = "";
  code_challenge: string = "";
}

export class OauthProvider {
  type: string = "";
  display_icon: string = "";
  client_id: string = "";
  client_secret: string = "";
  app_id: string = "";
  allow_domains: string = "";
  domain: string = "";
  method: string = "";
  sub_type: string = "";
  scope: string = "";
  mp_scope: string = "";
  silent_endpoint: string = "";
  internal_endpoint: string = "";
  mp_endpoint: string = "";
  enabled: number = 0;
  tenant_id: string = "";
  nonce: string = "";
  authorization_url: string = "";
  token_url: string = "";
  code_challenge: string = "";
}

export class LdapProvider {
  fqdn_or_ip: string = "";
  port: number = 0;
  tls_port: number = 0;
  base_dn: string = "";
  filter: string = "";
}
