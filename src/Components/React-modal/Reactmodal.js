import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Reactmodal.css'


const Reactmodal = (props) => {
    const { image, title, description, category, price, rating } = props.product;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>

                </Modal.Header>
                <div className='d-flex justify-content-around'>
                    <div className='col-md-6 p-2'>
                        <h3>Category : {category}</h3>
                        <p>Price : {price}</p>
                        <p>Rating : {rating.rate}</p>
                    </div>
                    <div className='col-md-6 p-2'>
                        <img className='height' src={image} alt=''></img>
                    </div>
                </div>
                <Modal.Body>{description.slice(0, 100)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Reactmodal;