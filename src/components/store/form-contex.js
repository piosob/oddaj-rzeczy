import React, { useReducer } from 'react';

const FormContex = React.createContext({
  formStep: 1,
  step1Radio: null,
  step2Bag: null,
  onNextClick: () => { },
  onPrevClick: () => { },
  onRadioClick: () => { },
})
export default FormContex;


const INITIAL_VALUE = {
  formStep: 1,
  step1Radio: null,
  step2Bag: null,
};


const formReducer = (state, action) => {
  if (action.type === "NEXT_BTN_CLICKED") {
    return {
      ...state,
      formStep: action.formStep,
    };
  } else if (action.type === "PREV_BTN_CLICKED") {
    return {
      ...state,
      formStep: action.formStep,
    };
  }
  else if (action.type === "RADIO_CLICKED") {
    return {
      ...state,
      step1Radio: action.step1Radio,
    };
  }
  else if (action.type === "BAG_CLICKED") {
    return {
      ...state,
      step2Bag: action.step2Bag,
    };
  }
  return INITIAL_VALUE;
};

export const FormContexProvider = props => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_VALUE);


  const handleNextButtonClick = () => {
    if (formState.formStep < 4) {
      let val = formState.formStep + 1;
      dispatchForm({
        type: "NEXT_BTN_CLICKED",
        formStep: val,
      });
    }
  };
  const handlePrevButtonClick = () => {
    if (formState.formStep > 1) {
      let val = formState.formStep - 1;
      dispatchForm({
        type: "PREV_BTN_CLICKED",
        formStep: val,
      });
    }
  };

  const handleRadioClick = (radio) => {
    dispatchForm({
      type: "RADIO_CLICKED",
      step1Radio: radio,
    });
  }
  const handleBagClick = (bag) => {
    dispatchForm({
      type: "BAG_CLICKED",
      step2Bag: bag,
    });
  }
  const contexValue = {
    formStep: formState.formStep,
    step1Radio: formState.step1Radio,
    step2Bag: formState.step2Bag,
    onNextClick: handleNextButtonClick,
    onPrevClick: handlePrevButtonClick,
    onRadioClick: handleRadioClick,
    onBagClick: handleBagClick,
  }

  return (
    <FormContex.Provider value={contexValue}>{props.children}</FormContex.Provider>
  );
}