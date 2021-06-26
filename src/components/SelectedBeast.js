import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }


    handleClose = () => {
        this.props.handleClose()
    }

    render() {

        return (
            <>
                <h1>{this.props.name}</h1>

                <Modal
                    show={this.props.display}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <img src={this.props.imgSrc} className="Modal-Body" alt="img" height="300px" width="300px" />
                            <p>{this.props.description}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}


export default SelectedBeast