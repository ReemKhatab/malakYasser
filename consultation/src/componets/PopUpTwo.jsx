import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/PopUp.css"

function PopUpTwo(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.message} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button className="ButtonClose" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpTwo;
