import React from 'react'
import { useState } from 'react';
import { Modal,Spinner} from 'react-bootstrap'

const LoadingModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Modal size="sm" show={props.isLoading} onHide={handleClose} backdrop="static" keyboard={false}  centered>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="info" />
                    <div className="ms-3 my-auto">
                        Loading...
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default LoadingModal