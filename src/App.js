import React from 'react';

import Form from './components/Form';
import Header from './components/Header';

import ProviderCategories from './components/context/ContextCategory';

function App() {
  return (
    <ProviderCategories>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </ProviderCategories>
  );
}

export default App;
