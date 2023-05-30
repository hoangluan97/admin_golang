import accountReducer from '@app/store/slices/accountSlice';
import userReducer from '@app/store/slices/userSlice';
import licenseReducer from '@app/store/slices/licenseSlice';
import generalReducer from './generalSlice';
import invoiceReducer from './invoiceSlice';
import adminReducer from './adminSlice';
import ssoReducer from './ssoSlice';
import promotionReducer from './promotionSlice';
import tracingReducer from './tracingSlice';
import requestReducer from './requestSlice';

export default {
    account: accountReducer,
    user: userReducer,
    license: licenseReducer,
    invoice: invoiceReducer,
    general: generalReducer,
    admin: adminReducer,
    sso: ssoReducer,
    promotion: promotionReducer,
    tracing: tracingReducer,
    request: requestReducer,
};
