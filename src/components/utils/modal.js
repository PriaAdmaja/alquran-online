import { Modal, Button } from "react-bootstrap"

const ModalTafsir = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Body className="m-3">
                <p>{props.desc}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTafsir
