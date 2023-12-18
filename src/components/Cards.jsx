import { useState } from "react";
import "./Cards.css";
import Button from "react-bootstrap/esm/Button";
import React, { Component } from "react";
// import FlipCard from "./FlipCard";
import Modal from "react-bootstrap/Modal";

function Cards({ character }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="flip-card-back">
            <h3>{character.name}</h3>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Learn More
              </Button>
              <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <Modal.Header className="d-flex flex-column justify-content-center">
                  <img src={character.image} />
                  <Modal.Title className="text-black">
                    {character.name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-black d-flex justify-content-center">
                  Species: {character.species}
                </Modal.Body>
                <Modal.Body className="text-black d-flex justify-content-center">
                  Status: {character.status}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
