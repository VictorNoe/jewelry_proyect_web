import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Image, Row } from "react-bootstrap";

export const Supplier = () => {
    // USESTATE PARA ESTADO DE MODAL
    const [showModalEdit, setShowModalEdit] = useState(false);
    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')
    // USESTATE PARA ALMACENAR LA INFORMACIÓN DEL PROVEEDOR
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    // USESTATE PARA ALMACENAR PROVEEDORES
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                res.json(),
            ).then((resp) => {
            console.log(resp)
            setProveedores(resp)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    // funciones para abrir y cerrar modal
    const handleClose = () => {
        setShowModalEdit(false);
        setProveedorSeleccionado(null);
    };
    const handleShow = (title, proveedor) => {
        setShowModalEdit(true);
        setTitleModal(title);
        setProveedorSeleccionado(proveedor)
    };

    return (
        <Container>
            <div style={{ padding: '25px', textAlign: 'center' }}>
                <h1>Lista de proveedores</h1>
            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => handleShow('Agregar proveedor')} className='btn btn-success'>Agregar</button>
            </div>
            {/* TABLA DE PROVEEDORES */}
            <div style={{ overflowY: 'scroll', height: '400px' }}>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th style={{ backgroundColor: '#D1D1D1' }}>#</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre del proveedor</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Número de telefono</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>correo electrónico</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {proveedores.map(proveedor => (
                        <tr>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.name}</td>
                            <td>{proveedor.phone}</td>
                            <td>{proveedor.email}</td>
                            <td>
                                <button onClick={() => handleShow('Editar información de proveedor', proveedor)} style={{ margin: '10px 8px 10px 10px' }} className='btn btn-primary'>
                                    Editar
                                </button>
                                <button className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

            {/* MODAL PARA EDITAR */}
            <Modal style={{ margin: 'auto', top: '15%' }} show={showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.name || ''} />
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="text" value={proveedorSeleccionado?.phone || ''} />
                        <br />
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type='email' value={proveedorSeleccionado?.email || ''} />
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}