export const extractSSOContent = (values: Record<string, any>) => {
    // filter content fields
    const not_content_key = [
        'app_name',
        'display_name',
        'protocol',
        'sub_type',
        'order',
        'status',
        'disable_ssl',
        'allow_domains',
        '_form_idp_mode',
    ];
    const content = Object.keys(values)
        .filter((key) => !not_content_key.includes(key))
        .reduce((obj: Record<string, any>, key: string) => {
            let val = values[key];
            if (typeof val === 'boolean') {
                val = val ? 1 : 0;
            }
            obj[key] = val;
            return obj;
        }, {});

    return content;
};

export const trimSpaceValues = (values: Record<string, any>) => {
    const valuesFormat: Record<string, any> = {};
    for (const key in values) {
        if (typeof values[key] == 'string') {
            valuesFormat[key] = values[key].trim();
        } else {
            valuesFormat[key] = values[key];
        }
    }
    return valuesFormat;
};
