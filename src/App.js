import React from "react";
import "./App.css";
import Light from './components/light/light';
import {store} from './redux/store';
import {Provider} from "react-redux";

const App =() => {
  return (
    <Provider store={store}>
      <React.Fragment>
          <Light/>

      </React.Fragment>
    </Provider>
  );
};

export default App;
