import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactBook from "./Components/ContactBook/ContactBook";
import EditContact from "./Components/EditContact/EditContact";
import HeaderNav from "./Components/Header/HeaderNav";

const App = () => {
  // add contact
  const [contact, setContact] = useState([]);
  function handleContact(obj) {
    let newCont = [...contact];
    newCont.unshift(obj);

    setContact(newCont);
  }
  // delete
  function handleDelete(id) {
    let newConts = contact.filter((item) => item.id !== id);
    setContact(newConts);
  }
  // edit
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [person, setPerson] = useState({});
  function handleEdit(id) {
    let newPerson = contact.filter((item) => item.id == id);
    setPerson(newPerson[0]);
  }
  function handleSave(obj) {
    let newcont = contact.map((item) => {
      if (item.id == obj.id) return obj;
      else return item;
    });
    setContact(newcont);
    console.log(person);
  }
  return (
    <div>
      <HeaderNav />
      <AddContact handleContact={handleContact} />
      <ContactBook
        contact={contact}
        handleShow={handleShow}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {/* <EditContact
        person={person} 
        handleEdit={handleEdit}
        contact={contact}
        handleSave={handleSave}
        show={show}
        handleClose={handleClose}

      /> */}
      {show && (
        <EditContact
          person={person}
          handleEdit={handleEdit}
          contact={contact}
          handleSave={handleSave}
          show={show}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
