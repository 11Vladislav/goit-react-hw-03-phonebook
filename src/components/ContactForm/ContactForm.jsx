import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { StyledForm, Input } from './ContactForm.styled';

const INITIAL_STATE = { name: '', number: '' };

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleFieldChange = event => {
      this.setState({
          [event.target.name]:
          event.target.value
      });
  };

  handleAddContact = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    onAddContact({ name, number, id: nanoid() });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm  onSubmit={this.handleAddContact}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleFieldChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          id="number"
          value={number}
          onChange={this.handleFieldChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </StyledForm>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}