import React from "react";

class Contact extends React.Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card card-body'>
        <h4>Name: {name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
