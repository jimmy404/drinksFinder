import React, { createContext, useState } from 'react';

export const ContextRecipes = createContext();

const ProviderRecipes = (props) => {

  const [recipes, setRecipes] = useState([]);

  const [search, searchRecipes] = useState({
    name: '',
    category: ''
  })

  return (
    <ContextRecipes.Provider
      value={{
        searchRecipes
      }}
    >
      {props.children}
    </ContextRecipes.Provider>
  );
};

export default ProviderRecipes;
