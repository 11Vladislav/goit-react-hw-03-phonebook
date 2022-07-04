import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
}; // Initial state of the application

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleFilterChange = filter => {
    this.setState({ filter }); // Set the filter in the state
  };


  handleAddContact = contact => {
    const { contacts } = this.state;
    if (contacts.filter(({ name }) => name === contact.name).length !== 0) {
      alert(contact.name + ' is already in contacts!'); // If the contact is already in the contacts, alert the user
      return;
    }

    this.setState(prevState => ({
      ...INITIAL_STATE,
      contacts: [contact, ...prevState.contacts], // Add the contact to the contacts
    }));
  };

  componentDidMount = () => {
    const persistedState = localStorage.getItem('contacts');
    if (persistedState) {
      this.setState({ contacts: JSON.parse(persistedState) });
    }
  }

    componentDidUpdate = () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }


  handleDeleteContact = id => {
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      return { ...INITIAL_STATE, contacts: updatedContacts }; // Update the contacts
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state; // Get the contacts and the filter from the state
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()), // Filter the contacts by the filter
    );
  };

  render() {
    const { filter } = this.state; // Get the filter from the state
    const filteredContacts = this.filterContacts(); // Get the filtered contacts

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.handleAddContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onFilterChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App