import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ContextRecipes = createContext();

const ProviderRecipes = (props) => {

  const [recipes, setRecipes] = useState([]);

  const [search, searchRecipes] = useState({
    name: '',
    category: ''
  });

  const [consult, saveConsult] = useState(false);

  const { name, category } = search;

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const result = await axios.get(url);
        setRecipes(result.data.drinks);
      }
      getRecipes();
    }
  }, [search]);

  return (
    <ContextRecipes.Provider
      value={{
        recipes,
        searchRecipes,
        saveConsult
      }}
    >
      {props.children}
    </ContextRecipes.Provider>
  );
};

export default ProviderRecipes;
