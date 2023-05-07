import api from "../api";
import { URL_LOGIN, URL_REGISTER, URL_SEARCH, URL_NEW_HOME, URL_CATEGORY, URL_GET_USER, URL_USER, URL_USER_EDIT, URL_EDIT, URL_CREATE_CATEGORY, URL_DELETE, URL_ACTIVE } from "../../constants/endpoints";

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

export function deleteRoom(data) {
  return api.post(URL_DELETE, data)
}

export function activeRoom(data) {
  return api.post(URL_ACTIVE, data)
}

export function editUser(data) {
  return api.post(URL_USER_EDIT, data)
}

export function getAllUser(data) {
  return api.post(URL_GET_USER, data)
}
