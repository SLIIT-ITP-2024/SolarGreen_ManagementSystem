import Header from "../components/_Shared/Header"
import Menu from "../components/_Shared/Menu"
import React from 'react';
const WithLayout = (WrappedComponent) => {

  return () => (
    <div>
        <Header />
        <Menu />
        <WrappedComponent />
    </div>
  );
}

export default WithLayout
