import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
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
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title={'Phonebook'} />
        <Phonebook onAddContact={this.addContact} filter={this.state.filter} />
        <Section title={'Contacts'} />
        <Filter filter={this.state.filter} onSearch={this.searchContact} />
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
