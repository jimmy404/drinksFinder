import React, { useContext } from 'react';

import { ContextCategories } from './context/ContextCategory';

const Form = () => {

  const { categories } = useContext(ContextCategories);
  console.log('Test - Form: ', categories);
  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Search drink by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="category">
            <option value="">- Select category -</option>
            {categories.map(category => (
              <option
                key={category.strCategory}
                value={category.strCategory}
              >{category.strCategory}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
