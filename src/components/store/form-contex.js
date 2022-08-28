import React, { useReducer } from 'react';

const FormContex = React.createContext({
  formStep: 1,
  step1Radio: null,
  step2Bag: null,
  step3Localization: null,
  step3WhoHelp: [],
  step3WhoHelpErrorMessage: null,
  step3CustomOrganization: "",
  step4: {
    street: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    date: "",
    hour: "",
    remarks: ""
  },
  onNextClick: () => { },
  onPrevClick: () => { },
  onRadioClick: () => { },
  onBagClick: () => { },
  onLocalizationClick: () => { },
  onWhoHelp: () => { },
  onStep3CustomOrganizationChange: () => { },
  onStep4Change: () => { },


})
export default FormContex;


const INITIAL_VALUE = {
  formStep: 1,
  step1Radio: null,
  step2Bag: null,
  step3Localization: null,
  step3WhoHelp: [],
  step3WhoHelpErrorMessage: null,
  step3CustomOrganization: "",
  step4: {
    street: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    date: "",
    hour: "",
    remarks: ""
  }
};


const formReducer = (state, action) => {
  if (action.type === "NEXT_BTN_CLICKED") {
    // if (state.formStep === 3 && state.step3WhoHelp.length === 0) {
    if (state.formStep === 3) {
      if (state.step3WhoHelp.length === 0 && state.step3CustomOrganization.length === 0) {
        return {
          ...state,
          step3WhoHelpErrorMessage: "Błąd! Musisz wskazać komu chcesz pomóc.",
        };
      }
      // if (state.formStep === 3 && (state.step3WhoHelp.length === 0 || state.step3CustomOrganization.length === 0)) {

    }
    // else if (state.formStep === 3 && state.step3CustomOrganization.length !== 0) {
    //   console.log("state.formStep === 3 && state.step3CustomOrganization.length !== 0");
    //   return {
    //     step3WhoHelpErrorMessage: null,
    //     formStep: action.formStep,

    //   }
    // }
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      formStep: action.formStep,
    };
  }
  else if (action.type === "PREV_BTN_CLICKED") {
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      formStep: action.formStep,
    };
  }
  else if (action.type === "RADIO_CLICKED") {
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step1Radio: action.step1Radio,
    };
  }
  else if (action.type === "BAG_CLICKED") {
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step2Bag: action.step2Bag,
    };
  }
  else if (action.type === "LOCALIZATION_CLICKED") {
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step3Localization: action.step3Localization,
    };
  }
  else if (action.type === "WHO_HELP_CLICKED") {
    const existingGroupIndex = state.step3WhoHelp.findIndex(group => group === action.step3WhoHelp);
    const existingGroup = state.step3WhoHelp[existingGroupIndex];
    let updatedGroups;
    if (existingGroup) {
      updatedGroups = [...state.step3WhoHelp]
    }
    if (action.step3WhoHelp === existingGroup) {
      updatedGroups = state.step3WhoHelp.filter(group => group !== action.step3WhoHelp)
    }
    else {
      updatedGroups = state.step3WhoHelp.concat(action.step3WhoHelp)
    }
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step3WhoHelp: updatedGroups,
    };
  }
  else if (action.type === "CUSTOM_ORGANIZATION_CHANGE") {
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step3CustomOrganization: action.step3CustomOrganization,
    };
  }
  else if (action.type === "STEP4_CHANGE") {
    console.log(action.name);
    console.log(action.value);
    return {
      ...state,
      step3WhoHelpErrorMessage: null,
      step4: {
        ...state.step4,
        [action.name]: action.value
      }
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
  const handleLocalizationClick = (localization) => {
    dispatchForm({
      type: "LOCALIZATION_CLICKED",
      step3Localization: localization,
    });
  }
  const handleWhoHelpClick = (whoHelp) => {
    dispatchForm({
      type: "WHO_HELP_CLICKED",
      step3WhoHelp: whoHelp,
    });
  }
  const handleStep3CustomOrganizationChange = (organization) => {
    dispatchForm({
      type: "CUSTOM_ORGANIZATION_CHANGE",
      step3CustomOrganization: organization,
    });
  }
  const handleStep4Change = (name, value) => {
    dispatchForm({
      type: "STEP4_CHANGE",
      name: name,
      value: value,
    });
  }
  const contexValue = {
    formStep: formState.formStep,
    step1Radio: formState.step1Radio,
    step2Bag: formState.step2Bag,
    step3Localization: formState.step3Localization,
    step3WhoHelp: formState.step3WhoHelp,
    step3WhoHelpErrorMessage: formState.step3WhoHelpErrorMessage,
    onNextClick: handleNextButtonClick,
    onPrevClick: handlePrevButtonClick,
    onRadioClick: handleRadioClick,
    onBagClick: handleBagClick,
    onLocalizationClick: handleLocalizationClick,
    onWhoHelpClick: handleWhoHelpClick,
    onStep3CustomOrganizationChange: handleStep3CustomOrganizationChange,
    onStep4Change: handleStep4Change,
  }

  return (
    <FormContex.Provider value={contexValue}>{props.children}</FormContex.Provider>
  );
}