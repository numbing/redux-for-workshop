import axios from "axios";

export const getData = () => dispatch => {
  dispatch(setDataLoading());
  axios.get("https://swapi.co/api/people").then(res =>
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
  );
};

export const setDataLoading = () => {
  return {
    type: "DATA_LOADING"
  };
};
