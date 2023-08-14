import React, { useState, useEffect } from 'react';
import assignId from 'services/asignId';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts?.length > 1) {
      setContacts(JSON.parse(storedContacts));
    } else {
      // Only to simulate that this service was used before and contains some data
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Contact already exists!');
    } else {
      const newContact = {
        name,
        number,
        id: assignId(contacts)
      };
      console.log(newContact)
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleSearch = value => {
    setFilter(value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </main>
  );
};

export default App;
