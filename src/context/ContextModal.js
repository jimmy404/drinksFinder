import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ContextModal = createContext();

const ProviderModal = (props) => {

  const [ idRecipe, saveIdRecipe ] = useState(null);

  return (
    <ContextModal.Provider
      value={{
        saveIdRecipe
      }}
    >
      {props.children}
    </ContextModal.Provider>
  );
};

export default ProviderModal;
