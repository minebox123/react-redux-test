import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const forbiddenWords = ["fuck", "shit", "cock"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}

export function showAlert() {
  return function(next) {
    return function(action) {
      if (action.type === FOUND_BAD_WORD) {
        return alert("Some bad words are not gonna be displayed!");
      }
      return next(action);
    };
  };
}
