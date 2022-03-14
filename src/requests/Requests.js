import { url } from "../helpers/url";
import axios from "axios";

export const loadNotes = async () => {
  try {
    const response = await axios.get(`${url}/noutes`);
    return response;
  } catch (err) {
    throw new Error(`Could't fetch: ${url}`);
  }
};

export const setNotes = async (noute) => {
  try {
    const response = await axios.post(`${url}/noutes`, noute);
    return response;
  } catch (err) {
    throw new Error(`Could not fetch ${url}`);
  }
};

export const deleteNotes = async (id) => {
  try {
    const res = await axios.delete(`${url}/noutes/${id}`);
    return res;
  } catch (err) {
    throw new Error(`Could not fetch ${url}`);
  }
};
