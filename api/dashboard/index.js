import api from "../api";
import { URL_SEARCH, URL_SEARCH_USER } from "../../constants/endpoints";
export function search(data) {
  return api.post(URL_SEARCH, data)
}
export function searchUser(data) {
  return api.post(URL_SEARCH_USER, data)
}
