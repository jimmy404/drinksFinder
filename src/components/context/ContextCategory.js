import React, { createContext, useState } from 'react';

export const ContextCategories = createContext();

const ProviderCategories = (props) => {
  const [state, setState] = useState('Hello world');

  return (
    <ContextCategories.Provider
    value={{
      state
    }}
    >
      {props.children}
    </ContextCategories.Provider>
  );
};

export default ProviderCategories;
