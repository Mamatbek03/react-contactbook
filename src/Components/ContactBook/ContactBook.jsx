import React from "react";
import ContactList from "../ContactList/ContactList";

const ContactBook = ({ contact, handleDelete, handleShow, handleEdit }) => {
  return (
    <div>
      <center>
        <h3>Contactbook</h3>
      </center>
      <div className="d-flex flex-row flex-wrap ">
        {contact.map((item) => (
          <ContactList
            handleEdit={handleEdit}
            item={item}
            handleDelete={handleDelete}
            handleShow={handleShow}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
