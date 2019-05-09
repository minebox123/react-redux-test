import React from "react";
import { Provider } from "react-redux";
import store from "./js/store/index";
import List from "./List";
import Form from "./Form";

const App = () => {
  return (
    <Provider store={store}>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="com-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    </Provider>
  );
};

export default App;
