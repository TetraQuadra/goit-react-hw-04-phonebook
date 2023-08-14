import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };


  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Phone Number"
        />
        <button
          style={{
            padding: '8px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            margin: '20px 0 0 280px',
          }}
          type="submit"
        >
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm; 
