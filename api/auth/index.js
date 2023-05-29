import api from "../api";
import { URL_HISTORY, URL_NEW_PAY_ROOM, URL_UPDATE_PAY_ROOM, URL_GET_PAY_ROOM, URL_NEW_TENANT, URL_DELETE_TENANT, URL_UPDATE_TENANT, URL_GET_TENANT_ROOM, URL_GET_DETAILS, URL_LOGIN, URL_REGISTER, URL_SEARCH, URL_NEW_HOME, URL_CATEGORY, URL_GET_USER, URL_USER, URL_USER_EDIT, URL_EDIT, URL_CREATE_CATEGORY, URL_DELETE, URL_ACTIVE, URL_MONEY, URL_GET_USER_TOKEN } from "../../constants/endpoints";

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

export function GetDetail(data) {
  return api.get(URL_GET_DETAILS + `${data}`)
}

export function getMoney(data) {
  return api.post(URL_MONEY, data)
}

export function getUserByToken() {
  return api.post(URL_GET_USER_TOKEN)
}

export function newPayRoom(data) {
  return api.post(URL_NEW_PAY_ROOM, data)
}

export function updatePayRoom(data) {
  return api.post(URL_UPDATE_PAY_ROOM, data)
}

export function getPayMonthRoom(data) {
  return api.get(URL_GET_PAY_ROOM, data)
}

export function newTenant(data) {
  return api.post(URL_NEW_TENANT, data)
}

export function updateTenant(data) {
  return api.post(URL_UPDATE_TENANT, data)
}

export function delTenant(data) {
  return api.post(URL_DELETE_TENANT, data)
}

export function getHistory(data) {
  return api.post(URL_HISTORY, data)
}

export function getTenantRoom(data) {
  return api.get(URL_GET_TENANT_ROOM + `${data}`)
}