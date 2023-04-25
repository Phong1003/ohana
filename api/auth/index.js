import api from "../api";
import { URL_LOGIN, URL_REGISTER, URL_SEARCH, URL_NEW_HOME } from "../../constants/endpoints";

export function loginApi(data) {
  return api.post(URL_LOGIN, data);
}

export function registerApi(data) {
  return api.post(URL_REGISTER, data);
}

export function search(data) {
  return api.get(URL_SEARCH, data)
}

export function createApi(data) {
  return api.post(URL_NEW_HOME, data)
}
