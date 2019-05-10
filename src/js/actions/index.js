import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function showAlert(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "DATA_LOADED", payload: data });
      });
  };
}
