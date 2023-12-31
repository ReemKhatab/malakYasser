import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/PopUp.css";

function PopUpThree(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ERROR! There is a duplicated match or team
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button className="ButtonClose" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpThree;
