import api from "../api";
import { URL_LOGIN, URL_REGISTER } from "../../constants/endpoints";

export function loginApi(data) {
  return api.post(URL_LOGIN, data);
}

export function registerApi(data) {
  return api.post(URL_REGISTER, data);
}
