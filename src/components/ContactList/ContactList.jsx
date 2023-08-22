
import { ListItem, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(s => s.contacts.contacts);
  const filter = useSelector(s => s.filter);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </ListItem>
        ))}
      </ul>
    </>
  );
};



