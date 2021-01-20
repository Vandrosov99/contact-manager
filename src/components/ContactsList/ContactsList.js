import React, { useState, useContext } from "react";
import Contact from "../Contact/Contact";
import { ContactContext } from "../../Context/Provider";

const ContactsList = () => {
  const [state, dispatch] = useContext(ContactContext);
  console.log(state.contacts);

  return (
    <React.Fragment>
      {state.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </React.Fragment>
  );
};

export default ContactsList;
