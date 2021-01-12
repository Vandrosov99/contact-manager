import React, { useState } from "react";
import Contact from "../Contact/Contact";

const ContactsList = () => {
  const [contactList, setContactList] = useState({
    list: [
      {
        id: 1,
        name: "Mr.Vanya",
        email: "mrvania@gmail.com",
        phone: "555-555-22",
      },
      {
        id: 2,
        name: "Mr.Petya",
        email: "mrpetya@gmail.com",
        phone: "333-555-22",
      },
      {
        id: 3,
        name: "Mr.Oleg",
        email: "mrOleg@gmail.com",
        phone: "222-555-22",
      },
    ],
  });

  const removeContact = id => {
    const updateList = contactList.list.filter(contact => {
      return contact.id !== id;
    });

    setContactList({
      ...contactList,
      list: updateList,
    });
  };
  return (
    <React.Fragment>
      {contactList.list.map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
          removeContact={removeContact}
        />
      ))}
    </React.Fragment>
  );
};

export default ContactsList;
