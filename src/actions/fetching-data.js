import axios from "axios";

export const getCarsData = () => dispatch => {
  dispatch(setDataLoading());
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res =>
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
  );
};