import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ContextModal = createContext();

const ProviderModal = (props) => {

  const [ idRecipe, saveIdRecipe ] = useState(null);
  const [ recipe, setRecipe ] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if(!idRecipe){
        return;
      }
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
      const result = await axios.get(url);
      setRecipe(result.data.drinks[0]);
    }
    getRecipe();
  }, [idRecipe]);

  return (
    <ContextModal.Provider
      value={{
        recipe,
        saveIdRecipe,
        setRecipe
      }}
    >
      {props.children}
    </ContextModal.Provider>
  );
};

export default ProviderModal;
