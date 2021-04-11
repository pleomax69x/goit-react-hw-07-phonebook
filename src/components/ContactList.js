import { connect } from "react-redux";
import * as operations from "../redux/contacts-operations";

const ContactList = ({ items, deleteContact }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getvisibleContacts = (allContact, filter) => {
  const lowText = filter.toLowerCase();

  return allContact.filter((contact) =>
    contact.name.toLowerCase().includes(lowText)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = getvisibleContacts(items, filter);

  return {
    items: visibleContacts,
  };
};

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   return {
//     items: getvisibleContacts(items, filter),
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
