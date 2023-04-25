import api from "../api";
import { URL_SEARCH } from "../../constants/endpoints";
export function search(data) {
  return api.post(URL_SEARCH, data)
}
