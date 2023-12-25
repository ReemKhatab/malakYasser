import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/PopUp.css"

function PopUp(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your purchase is done sucessfully
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>You can view your tickets in your cart.</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button className="ButtonClose" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
