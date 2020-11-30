import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../../pages/Home';
import GlobalStyle from '../../styles/GlobalStyles';
import Modal from '../Modal/Modal';
import store from '../../store/store';

import 'normalize.css';

function App() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    modal: '',
    person: null,
  });

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
