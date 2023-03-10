import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function AddContact({ handleContact }) {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");
  let [mail, setMail] = useState("");
  function handleAddContact() {
    if (!name || !surname || !phone || !mail) {
      alert("Contact is't whole!");
      return;
    }
    let contact = {
      name,
      surname,
      phone,
      mail,
      id: Date.now(),
    };
    handleContact(contact);
    setName("");
    setSurname("");
    setPhone("");
    setMail("");
  }

  return (
    <div
      shadow-lg
      p-3
      mb-5
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <div className="bg-info rounded-top">
          <Modal.Header>
            <Modal.Title className="m-auto text-white">Add Contact</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="form">
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="my-4"
              placeholder="Name"
            />
            <FormControl
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="my-4"
              placeholder="Surame"
            />
            <FormControl
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="my-4"
              placeholder="Phone"
            />
            <FormControl
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="my-4"
              placeholder="Mail"
            />
          </div>
        </Modal.Body>

        <div className="bg-info rounded-bottom">
          <Modal.Footer>
            <button
              className=" border border-white shadow-lg p-3 m-5 m-auto bg-white rounded fs-3 px-3 py-1"
              onClick={handleAddContact}
            >
              Add
            </button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>
  );
}

export default AddContact;
