export const ruleRequiredText = [
    {
        required: true,
        message: <div style={{ paddingLeft: '5px', fontSize: '0.7em' }}>The field cannot be left blank</div>,
    },
];

export const ruleValidateDomainString = (required = false) => [
    {
        required: required,
        validator: (rule: any, value: any, callback: any) => {
            if (value === undefined || value === null || value === '') {
                if (!required) {
                    return callback();
                } else {
                    const messageRequired = (
                        <div style={{ paddingLeft: '5px', fontSize: '0.7em' }}>The field cannot be left blank</div>
                    );
                    return callback(messageRequired);
                }
            }

            // value: example1.com, example2.com;
            // https://stackoverflow.com/questions/26093545/how-to-validate-domain-name-using-regex
            const domainRegex = new RegExp('^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+$');

            const splitString = value
                .split(',')
                .map((s: any) => s.trim())
                .filter((s: any) => s.toString().length >= 1);

            for (let i = 0; i < splitString.length; i++) {
                if (splitString[i] == '*') {
                    // allow all domains
                    continue;
                }
                if (!domainRegex.test(splitString[i])) {
                    const messageError = (
                        <div style={{ paddingLeft: '5px', fontSize: '0.7em' }}>
                            Not valid domain string: {splitString[i]}
                        </div>
                    );
                    return callback(messageError);
                }
            }
            return callback();
        },
    },
];

const ruleValidateUrl = (required: boolean) => [
    {
        required: required,
        validator: (rule: any, value: any, callback: any) => {
            // not required
            if (value === undefined || value === null || value === '') {
                if (!required) {
                    return callback();
                } else {
                    const messageRequired = (
                        <div style={{ paddingLeft: '5px', fontSize: '0.7em' }}>The field cannot be left blank</div>
                    );
                    return callback(messageRequired);
                }
            }

            try {
                const urlValid = new URL(value);
            } catch (_) {
                const messageError = (
                    <div style={{ paddingLeft: '5px', fontSize: '0.7em' }}>Not valid URL string: {value}</div>
                );
                return callback(messageError);
            }

            return callback();
        },
    },
];

export const formHelper: Record<string, any> = {
    app_name: {
        tooltip: null,
        rules: null,
    },

    allow_domains: {
        tooltip: null,
        rules: ruleValidateDomainString(false),
        placeholder: 'example1.com,example2.com',
        help: null,
    },

    sp_callback_url: {
        tooltip: null,
        rules: ruleValidateUrl(false),
        placeholder: 'https://example.com/callback',
        help: null,
    },
    sp_x509_private_cert: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },
    sp_x509_public_cert: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },

    sp_assert_consumer_service_url: {
        tooltip: null,
        rules: ruleValidateUrl(false),
        placeholder: null,
        help: null,
    },

    sp_issuer_url: {
        tooltip: null,
        rules: ruleValidateUrl(false),
        placeholder: null,
        help: null,
    },

    idp_xml_metadata: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },

    idp_sso_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    idp_issuer_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    idp_metadata_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    idp_x509_public_cert: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },
    authorization_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    token_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    issuer_url: {
        tooltip: null,
        rules: ruleValidateUrl(false),
        placeholder: null,
        help: null,
    },
    client_id: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },
    client_secret: {
        tooltip: null,
        rules: ruleRequiredText,
        placeholder: null,
        help: null,
    },
    scope: {
        tooltip: null,
        rules: null,
        placeholder: null,
        help: null,
    },
    domain: {
        tooltip: null,
        rules: ruleValidateDomainString(false),
        placeholder: null,
        help: null,
    },
    endpoint: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
    user_info_url: {
        tooltip: null,
        rules: ruleValidateUrl(true),
        placeholder: null,
        help: null,
    },
};
