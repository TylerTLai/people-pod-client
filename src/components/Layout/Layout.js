import React from 'react';

import Header from '../../sections/header/Header';
import PersonInfo from '../../sections/personInfo/PersonInfo';
import Sidebar from '../../sections/sidebar/Sidebar';
import * as Styles from './LayoutStyles';

function Layout({ children, setModalInfo }) {
  return (
    <Styles.StyledContainer>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        {/* Feed uses Layout as parent*/}
        {children}
      </div>
      <div className="sidebar">
        <Sidebar setModalInfo={setModalInfo} />
      </div>
      <div className="personInfo">
        <PersonInfo setModalInfo={setModalInfo} />
      </div>
    </Styles.StyledContainer>
  );
}

export default Layout;
