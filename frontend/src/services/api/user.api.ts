import { httpApi } from './mocks/http.api.mock';
import "./mocks/user.api.mock"

export const getUserDataApi = ():Promise<any> => {
  return httpApi.get("user/get")
}
