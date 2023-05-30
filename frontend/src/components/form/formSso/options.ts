import { OauthProvider, OpenIdProvider, SamlProvider } from "@app/interfaces/sso/provider";

export const providerSetting: Record<string, any>= {

    "providers_support": ["SAML", "OPENID", "OAUTH2", "LDAP", "CAS"],
    "providers_available": ["SAML", "OPENID", "OAUTH2"],
    "provider_default": "SAML",

    "SAML" : {

      display_icon_url : "../../../assets/login/saml.png",
      type_support: ["Aliyun IDaaS", "Keycloak", "Default" ],
        type_available:  ["Aliyun IDaaS", "Keycloak", "Default" ],
        
        initialValues: 
        {...JSON.parse(JSON.stringify(new SamlProvider())), 
          type: "Default",
          sub_type: "",
          disable_ssl: 0,
         
        },
    },

    "OAUTH2": {
      display_icon_url : "@app/assets/login/oauth2.png",
      type_support: ["Adfs", "Casdoor", "Auth0", "Infoflow", "Apple", "AzureAD", "Slack", "Steam", "Okta", "Douyin", "Custom", "Bilibili", "Line", "Amazon", "Auth0", "BattleNet", "Bitbucket", "Box", "CloudFoundry", "Dailymotion", "Deezer", "DigitalOcean", "Discord", "Dropbox", "EveOnline", "Fitbit", "Gitea", "Heroku", "InfluxCloud", "Instagram", "Intercom", "Kakao", "Lastfm", "Mailru", "Meetup", "MicrosoftOnline", "Naver", "Nextcloud", "OneDrive", "Oura", "Patreon", "Paypal", "SalesForce", "Shopify", "Soundcloud", "Spotify", "Strava", "Stripe", "TikTok", "Tumblr", "Twitch", "Twitter", "Typetalk", "Uber", "VK", "Wepay", "Xero", "Yahoo", "Yammer", "Yandex", "Zoom"],
        type_available:  ["Custom", "Adfs", "Casdoor", "Auth0", "Okta", "AzureAD",  "SalesForce"],
      
        initialValues: 
        {...JSON.parse(JSON.stringify(new OauthProvider())), 
          type: "Custom",
          sub_type: "",
          disable_ssl: 1,
         
        },
    },

    "OAUTH2-CUSTOM": {
      display_icon_url : "@app/assets/login/oauth2.png",
      type_support: ["Adfs", "Casdoor", "Auth0", "Infoflow", "Apple", "AzureAD", "Slack", "Steam", "Okta", "Douyin", "Custom", "Bilibili", "Line", "Amazon", "Auth0", "BattleNet", "Bitbucket", "Box", "CloudFoundry", "Dailymotion", "Deezer", "DigitalOcean", "Discord", "Dropbox", "EveOnline", "Fitbit", "Gitea", "Heroku", "InfluxCloud", "Instagram", "Intercom", "Kakao", "Lastfm", "Mailru", "Meetup", "MicrosoftOnline", "Naver", "Nextcloud", "OneDrive", "Oura", "Patreon", "Paypal", "SalesForce", "Shopify", "Soundcloud", "Spotify", "Strava", "Stripe", "TikTok", "Tumblr", "Twitch", "Twitter", "Typetalk", "Uber", "VK", "Wepay", "Xero", "Yahoo", "Yammer", "Yandex", "Zoom"],
        type_available:  ["Custom", "Adfs", "Casdoor", "Auth0", "Okta", "AzureAD",  "SalesForce"],

        initialValues: 
        {...JSON.parse(JSON.stringify(new OauthProvider())), 
          type: "Custom",
          sub_type: "",
          disable_ssl: 1,
         
        },
       
    },

    "OPENID": {
      display_icon_url : "@app/assets/login/openid.png",
      type_support: ["Default"],
        type_available:  ["Default"],
       
        initialValues: 
        {...JSON.parse(JSON.stringify(new OpenIdProvider())), 
          type: "Default",
          sub_type: "",
          disable_ssl: 1,
        },
    }
}

