import api from "../api";
import { URL_LOGIN, URL_REGISTER, URL_SEARCH, URL_NEW_HOME, URL_CATEGORY, URL_USER, URL_EDIT, URL_CREATE_CATEGORY } from "../../constants/endpoints";

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

export function categoryApi(data) {
  return api.post(URL_CATEGORY, data)
}

export function userApi(data) {
  return api.post(URL_USER, data)
}

export function editRoomsApi(data) {
  return api.post(URL_EDIT, data)
}

export function createCategoryApi(data) {
  return api.post(URL_CREATE_CATEGORY, data)
}
