import React, { Component } from "react";

import "./App.css";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { connect } from "react-redux";
import * as operations from "./redux/contacts-operations";
import * as selectors from "./redux/contacts-selectors";

class App extends Component {
  // useEffect(() => {
  //   console.log();
  // }, []);

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && <h2>Loading...</h2>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
