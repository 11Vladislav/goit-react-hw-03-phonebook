import PropTypes from 'prop-types';
import { ContactListItemContainer } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (    
        <li>
            <ContactListItemContainer>
                    <p>{name}</p>
                    <p>{number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </ContactListItemContainer>
        </li>
        )
    }

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}