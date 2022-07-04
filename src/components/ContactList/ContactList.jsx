import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
     <ul>
        <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}