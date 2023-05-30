import { httpApiMock } from '@app/services/api/mocks/http.api.mock';

httpApiMock.onGet('sso/get').reply(() => {
    return [
      200,
      { status: 1,
        data: [
          {
            id:  's24duidfasdg',
            app_name: "BioColab",
            display_name: "bioturing",
            protocol: "SAML",
            type: "AzureAD",
            sub_type:  "Okta",
            status: 0 ,
            order:  0,
            allow_domains:  "bioturing.com",
            callback_url:  "callback url",
            disable_ssl: 1 ,
            updated_at: Date.now() ,
            created_at:  Date.now() - 18453,
            content: {"type":"Default","display_icon":"","sp_x509_private_cert":"dfg","sp_x509_public_cert":"dfg","enable_sign_authn_request":1,"idp_xml_metadata":"df"}
          },
          {
            id:  's45gdfasdg',
            app_name: "Vinci",
            display_name: "google",
            protocol: "OAUTH2",
            type: "AzureAD",
            sub_type:  "Okta",
            status: 0 ,
            order:  0,
            allow_domains:  "facebook.com",
            callback_url:  "callback url",
            disable_ssl: 0 ,
            updated_at: Date.now() ,
            created_at:  Date.now() - 15453,
            content: {"type":"Custom","display_icon":"","client_id":"clientid","client_secret":"secret","authorization_url":"https://outh.com","token_url":"https://outh.com/url","user_info_url":"https://outh.com/url","scope":"scope","method":"get","extras":"ectra","token_value":"token","token_key":"key"}

          },
          {
            id:  's78duiasfdg',
            app_name: "Talk2Data",
            display_name: "dropbox",
            protocol: "OPENID",
            type: "AzureAD",
            sub_type:  "Okta",
            status: 0 ,
            order:  0,
            allow_domains:  "google.com",
            callback_url:  "callback url",
            disable_ssl: 1 ,
            updated_at: Date.now() ,
            created_at:  Date.now() - 157533,
            content: {"type":"Default","display_icon":"","authorization_url":"https://url.com","token_url":"https://url.com/token","client_id":"12345","client_secret":"123456","user_info_url":"https://url.com/user","scope":"scope","issuer_url":"https://url.com/issue","code_challenge":"code","enable_federation_mode":1}

          },
        ]
      },
    ];
});

