import './App.css';
import React from 'react';
import { Main } from './pages/main';
import { ModalProvider, LayoutProvider } from 'exsportia-components';

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <ModalProvider>
          <Main/>
        </ModalProvider>
      </LayoutProvider>
    </div>
  );
}

export default App;
