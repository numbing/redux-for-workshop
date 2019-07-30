import axios from "axios";

export const getData = () => dispatch => {
  dispatch(setDataLoading());
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res =>
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