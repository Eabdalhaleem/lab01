import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }



    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })
    render() {

        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Launch static backdrop modal
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}


export default SelectedBeast