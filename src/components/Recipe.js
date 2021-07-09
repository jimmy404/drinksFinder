import React, { useContext } from 'react';

import { ContextModal } from '../context/ContextModal';

const Recipe = ({recipe}) => {

  const { saveIdRecipe } = useContext(ContextModal);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">
          {recipe.strDrink}
        </h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`This is a ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => saveIdRecipe(recipe.idDrink)}
          >Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
