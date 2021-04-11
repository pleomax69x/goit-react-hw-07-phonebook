import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");

export const addContactRequest = createAction("addContactRequest");
export const addContactSuccess = createAction("addContactSuccess");
export const addContactError = createAction("addContactError");

export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactError = createAction("deleteContactError");

export const changeFilter = createAction("contact/filter");

// export const addContact = createAction("contact/add", ({ name, number }) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction("contact/delete");
