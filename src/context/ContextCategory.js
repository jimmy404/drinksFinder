import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ContextCategories = createContext();

const ProviderCategories = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categories = await axios.get(url);
      setCategories(categories.data.drinks)
    }
    getCategories();
  }, []);

  return (
    <ContextCategories.Provider
    value={{
      categories
    }}
    >
      {props.children}
    </ContextCategories.Provider>
  );
};

export default ProviderCategories;
