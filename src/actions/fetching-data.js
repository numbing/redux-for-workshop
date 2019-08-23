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

export const getWeather = () => dispatch => {
  const API_KEY = "e5ced403947117877134523bd0915d32\n";
  dispatch(setDataLoading());
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=berlin,de&appid=${API_KEY}&units=metric`
    )
    .then(res =>
      dispatch({
        type: "GET_WEATHER",
        payload: res.data
      })
    );
};

export const setDataLoading = () => {
  return {
    type: "DATA_LOADING"
  };
};
