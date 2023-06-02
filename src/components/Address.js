import React, { useContext } from "react";
import { FoodListContext } from "../context/FoodListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddressForm } from "./AddressForm";
import { v4 as uuid } from "uuid";

export const Address = () => {
  const { state, dispatch } = useContext(FoodListContext);

  const handleDeleteAddress = (id) => {
    dispatch({
      type: "ADDRESS_DELETE_BUTTON_CLICKED",
      payload: id,
    });
  };

  return (
    <div className="address-outer-container">
      <div className="address-header">
        {state.addresses.length === 0 && <h3>No address to display</h3>}
      </div>
      <div className="address-container">
        <div className="controller-container">
          {state.isAdded ? (
            <AddressForm
              details={{
                id: uuid(),
                name: "",
                phone: "",
                city: "",
                pin: "",
                state: "",
                addressText: "",
              }}
            />
          ) : (
            <button
              className="add-address-btn"
              onClick={() => dispatch({ type: "ADD_ADDRESS_BUTTON_CLICKED" })}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
          {!state.isAdded && (
            <p className="add-address-label">Add new Address</p>
          )}
        </div>

        <ul className="list-stacked address-list">
          {state.addresses.map((details) => {
            const { id, name, phone, city, pin, addressText, state } = details;
            const isEditing = state.editAddressId === id;

            return (
              <li
                key={id}
                className="list-stacked-item address-list-stacked-item"
              >
                {isEditing ? (
                  <AddressForm details={details} />
                ) : (
                  <>
                    <h3 className="list-stacked-heading ">{name}</h3>
                    <p className="ph-no-section">{phone}</p>
                    <p>{city}</p>
                    <p>{pin}</p>
                    <p>{state}</p>
                    <p>Address:{addressText}</p>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "ADDRESS_EDIT_BUTTON_CLICKED",
                          payload: id,
                        })
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDeleteAddress(id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
