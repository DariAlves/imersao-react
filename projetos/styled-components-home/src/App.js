import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import GlobalStyle from './globalStyles/global';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <GlobalStyle />
    </>
    );
}

export default App;
