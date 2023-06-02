import React, { useContext, useState } from "react";
import { FoodListContext } from "../context/FoodListContext";

export const AddressForm = ({ details }) => {
  const [detailsInput, setDetailsInput] = useState({
    id: details.id,
    name: details.name,
    phone: details.phone,
    city: details.city,
    pin: details.pin,
    state: details.state,
    addressText: details.addressText,
  });

  const { state, dispatch } = useContext(FoodListContext);

  const handleFormInput = (e, fieldName) => {
    setDetailsInput((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleUpdateButtonClick = () => {
    dispatch({
      type: "UPDATE_TO_ADDRESS",
      payload: detailsInput,
    });
  };

  const handleAddButtonClick = () => {
    dispatch({
      type: "ADD_TO_ADDRESS",
      payload: detailsInput,
    });
  };

  const handleCancelButtonClick = () => {
    dispatch({ type: "ADDRESS_CANCEL_BUTTON_CLICKED" });
  };

  const inputResetHandler = () => {
    setDetailsInput({
      id: details.id,
      name: "",
      phone: "",
      city: "",
      pin: "",
      state: "",
      addressText: "",
    });
  };

  const handleRandomData = () => {
    const randomIndex = Math.floor(Math.random() * state.demoAddress.length);
    const randomAddress = state.demoAddress[randomIndex];

    setDetailsInput({
      ...detailsInput,
      name: randomAddress.name,
      phone: randomAddress.phone,
      city: randomAddress.city,
      pin: randomAddress.pin,
      addressText: randomAddress.addressText,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={detailsInput.name}
        onChange={(e) => handleFormInput(e, "name")}
      />
      <input
        type="text"
        value={detailsInput.phone}
        onChange={(e) => handleFormInput(e, "phone")}
      />
      <input
        type="text"
        value={detailsInput.city}
        onChange={(e) => handleFormInput(e, "city")}
      />
      <input
        type="text"
        value={detailsInput.pin}
        onChange={(e) => handleFormInput(e, "pin")}
      />
      <input
        type="text"
        value={detailsInput.state}
        onChange={(e) => handleFormInput(e, "state")}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={detailsInput.addressText}
        onChange={(e) => handleFormInput(e, "addressText")}
      />
      <button
        onClick={state.isAdded ? handleAddButtonClick : handleUpdateButtonClick}
      >
        {state.isAdded ? "Add" : "Update"}
      </button>

      <button onClick={inputResetHandler}>Reset</button>
      <button onClick={handleRandomData}>Random Data</button>
      <button onClick={handleCancelButtonClick}>Cancel</button>
    </div>
  );
};
