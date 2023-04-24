import api from "../api";
import { URL_SEARCH } from "../../constants/endpoints";
export function search(data) {
  return api.get(URL_SEARCH, data)
}
