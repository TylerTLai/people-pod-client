import React from 'react';
import * as Styles from './LayoutStyles';

function Layout({ children }) {
  return (
    <Styles.StyledContainer>
      <div className="header">header</div>
      <div className="main">{children}</div>
      <div className="sidebar">sidebar</div>
      <div className="personInfo">person info</div>
    </Styles.StyledContainer>
  );
}

export default Layout;
