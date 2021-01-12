import React, { useState } from "react";

const Contact = props => {
  const { name, email, phone, id } = props.contact;

  const [isEnableInfo, setIsEnableInfo] = useState(false);

  const toggleInfo = () => {
    setIsEnableInfo(!isEnableInfo);
  };

  const deleteContact = id => {
    props.removeContact(id);
  };

  return (
    <div className='card card-body'>
      <h4>
        Name: {name}
        <i
          onClick={toggleInfo}
          className='fas fa-sort-down'
          style={{ cursor: "pointer" }}
        />
        <i
          onClick={() => {
            deleteContact(id);
          }}
          className='fas fa-times'
          style={{ cursor: "pointer", float: "right", color: "red" }}
        />
      </h4>
      {isEnableInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
