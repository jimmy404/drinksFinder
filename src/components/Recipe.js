import React, { useContext, useState } from 'react';

import { ContextModal } from '../context/ContextModal';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
// import { ModalConsumer } from '../context/ModalContext';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({recipe}) => {

  const [ modalStyle ] = useState(getModalStyle);

  const [ open, setOpen ] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            onClick={() => {
              saveIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >Recipe</button>
          <Modal
            open={open}
            onClose={() => {
              saveIdRecipe(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h1>Test - Modal</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
