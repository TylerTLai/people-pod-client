import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Feed from '../../sections/feed/Feed';
import GlobalStyle from '../../styles/GlobalStyles';
import Home from '../../pages/Home';
import Modal from '../Modal/Modal';
import store from '../../store/store';
import Trash from '../../pages/Trash';

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
              <Home setModalInfo={setModalInfo} />
            </Route>
            <Route exact path="/group/:group">
              <Feed setModalInfo={setModalInfo} />
            </Route>
            <Route exact path="/person/:person">
              <Feed setModalInfo={setModalInfo} />
            </Route>
            <Route exact path="/trash" component={Trash} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
