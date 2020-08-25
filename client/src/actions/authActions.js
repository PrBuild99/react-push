import { GET_ERRORS } from "./types";

const initialState = {
  isAuthenticated: false,
  user: {},
};
import axios from "axios";
export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};