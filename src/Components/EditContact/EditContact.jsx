import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function AddContact({
  person,
  handleEdit,
  contact,
  handleSave,
  show,
  handleClose,
}) {
  let [contactEdit, setContactEdit] = useState(person);
  console.log(person);
  console.log(contactEdit);
  const editName = (e) => {
    let newOjb = { ...contactEdit, name: e.target.value };
    setContactEdit(newOjb);
  };
  const editSurname = (e) => {
    let newOjb = { ...contactEdit, surname: e.target.value };
    setContactEdit(newOjb);
  };
  const editPhone = (e) => {
    let newOjb = { ...contactEdit, phone: e.target.value };
    setContactEdit(newOjb);
  };
  const editMail = (e) => {
    let newOjb = { ...contactEdit, mail: e.target.value };
    setContactEdit(newOjb);
  };
  return (
    <div
      shadow-lg
      p-3
      mb-5
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <div className="bg-info rounded-top">
          <Modal.Header>
            <Modal.Title className="m-auto text-white">
              Edit Contact
            </Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={contactEdit.name}
              onChange={editName}
              className="my-4"
              placeholder="Name"
            />
            <FormControl
              value={contactEdit.surname}
              onChange={editSurname}
              className="my-4"
              placeholder="Surame"
            />
            <FormControl
              value={contactEdit.phone}
              onChange={editPhone}
              className="my-4"
              placeholder="Phone"
            />
            <FormControl
              value={contactEdit.mail}
              onChange={editMail}
              className="my-4"
              placeholder="Mail"
            />
          </div>
        </Modal.Body>

        <div className="bg-info rounded-bottom">
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={() => {
                handleSave(contactEdit);
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default AddContact;
