import { ContactItem } from '../ContactItem/ContactItem'
import { ContactList } from './ContactsList.styled';

 

export const ContactsList = ({ contacts, filter, onDelete }) => {
  return (
    <div>
      <ContactList>
        {contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => (
            <ContactItem
              key={contact.id}
              item={contact}
              onDelete={onDelete} />
        ))}
      </ContactList>
    </div>
  );
};



