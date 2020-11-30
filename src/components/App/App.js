import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Modal from '../Modal/Modal';

function App() {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    modal: '',
    person: null,
  });

  return (
    <div className="App">
      <Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
