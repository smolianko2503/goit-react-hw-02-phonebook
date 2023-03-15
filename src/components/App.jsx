import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle'
import { Container } from './App.styled'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  searchContact = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }
        
    });
  };

  render() {
    return (
      <Container>
        <Section title={'Phonebook'} />
        <Phonebook
          onAddContact={this.addContact}
          filter={this.state.filter} />
        <Section title={'Contacts'} />
        <Filter
          filter={this.state.filter}
          onSearch={this.searchContact} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
