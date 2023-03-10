import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ContactList = ({ item, handleDelete, handleShow, handleEdit }) => {
  return (
    <Card style={{ width: "18rem", margin: "20px 30px" }}>
      <Card.Body>
        <Card.Title>Name: {item.name}</Card.Title>
        <Card.Title>Surname: {item.surname}</Card.Title>
        <Card.Title>Phone : {item.phone}</Card.Title>
        <Card.Title>Mail: {item.mail}</Card.Title>
        <Button onClick={() => handleDelete(item.id)} variant="primary">
          Delete
        </Button>
        <Button
          style={{ margin: "10px 0px 10px 20px" }}
          // onClick={handleShow}
          onClick={() => {
            handleShow();
            handleEdit(item.id);
          }}
          variant="success"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactList;
