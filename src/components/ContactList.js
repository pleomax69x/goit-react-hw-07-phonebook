import { connect } from "react-redux";
import * as operations from "../redux/contacts-operations";
import * as selectors from "../redux/contacts-selectors";

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

// const mapStateToProps = (state) => {
//   const visibleContacts = selectors.getvisibleContacts(state);
//   return {
//     items: visibleContacts,
//   };
// };
const mapStateToProps = (state) => ({
  items: selectors.getvisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
