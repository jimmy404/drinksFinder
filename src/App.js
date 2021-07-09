import React from 'react';

import Form from './components/Form';
import Header from './components/Header';
import RecipesList from './components/RecipesList';

import ProviderCategories from './context/ContextCategory';
import ProviderModal from './context/ContextModal';
import ProviderRecipes from './context/ContextRecipes';

function App() {
  return (
    <ProviderCategories>
      <ProviderRecipes>
        <ProviderModal>

          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>

        </ProviderModal>
      </ProviderRecipes>
    </ProviderCategories>
  );
}

export default App;
