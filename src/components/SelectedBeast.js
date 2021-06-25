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
// i have to call function
    modelDetils = () => {
        this.props.handleData()

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
                        <img src={this.props.imgSrc} alt=""/>
                        <p>{this.props.description}</p>
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