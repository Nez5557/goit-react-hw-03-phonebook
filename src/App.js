import { Component } from "react";
import shortid from "shortid";

import ContactsList from "./Components/ContactsList/ContactsList";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ListItem from "./Components/ContactsList/ListItem";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  componentDidMount() {
    if (localStorage.contacts) {
      const contactsFromLocalStorage = JSON.parse(
        localStorage.getItem("contacts")
      );
      this.setState({ contacts: contactsFromLocalStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  FilterHandler = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  addContact = (data) => {
    const { contacts } = this.state;
    const allNames = contacts.map((item) => item.name.toLowerCase());
    if (allNames.find((item) => item === data.name.toLowerCase())) {
      return alert("please change name");
    }

    this.setState((prev) => {
      const newContact = {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      };
      return { contacts: [...prev.contacts, newContact] };
    });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((item) => item.id !== id);
    this.setState({ contacts: [...newContacts] });
  };

  render() {
    const { contacts, filter } = this.state;
    const { FilterHandler, addContact, deleteContact } = this;

    const filtredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="container">
        <Form sendData={addContact} />
        <Filter onChange={FilterHandler} value={filter} />
        <ContactsList>
          <ListItem contacts={filtredContacts} onClick={deleteContact} />
        </ContactsList>
      </div>
    );
  }
}

export default App;
