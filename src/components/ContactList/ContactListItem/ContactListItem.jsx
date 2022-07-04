import PropTypes from 'prop-types';
import { ContactListItemContainer } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, onDeleteContact }) => {
    return (    
        contacts.map(({ id, name, number }) => (
            <li key={id}>
                <ContactListItemContainer>
                    {name}: {number}
                    <button type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </ContactListItemContainer>
            </li>
        ))
    )}

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}