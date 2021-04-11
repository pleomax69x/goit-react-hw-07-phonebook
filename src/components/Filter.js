import { connect } from "react-redux";
import * as action from "../redux/contacts-action";

const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(action.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
