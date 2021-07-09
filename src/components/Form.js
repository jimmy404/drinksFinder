import React, { useContext } from 'react';

import { ContextCategories } from './context/ContextCategory';

const Form = () => {

  const { state } = useContext(ContextCategories);
  console.log('Test', state);
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
