import React, {useContext, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {AuthContext} from "../../../auth";

export const Supplier = () => {
    // usestate para estado de modal editar
    const [showModalEdit, setShowModalEdit] = useState(false);
    // usestate para estado de modal agregar
    const [showModalAdd,setShowModalAdd]=useState(false);
    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')
    // USESTATE PARA ALMACENAR LA INFORMACIÓN DEL PROVEEDOR
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    // USESTATE PARA ALMACENAR PROVEEDORES
    const [proveedores, setProveedores] = useState([]);

    const url_api="http://localhost:8080/api/suppliers/"
    const {user} = useContext(AuthContext);

    useEffect(() => {
       fetch(url_api,{
           method:"GET",
           headers:{
               'Content-Type':'application/JSON',
               'Authorization':`Bearer ${user?.token}`
           }
       })
           .then((resp)=>resp.json())
           .then((data)=>{
               if(data.statusCode===200){
                   setProveedores(data.data);
               }
           })
           .catch((err)=>console.log("Error: ",err));
    }, [])

    // funciones para abrir y cerrar modal
    const handleClose = () => {
        setShowModalEdit(false);
        setProveedorSeleccionado(null);
        setShowModalAdd(false);
    };
    const handleShow = (title, proveedor) => {
        setTitleModal(title);
        setShowModalEdit(true);
        setProveedorSeleccionado(proveedor)
    };

    // función para actualizar proveedor
    const saveupdate=()=>{
        const {status,...supplierdata}=proveedorSeleccionado
        const updateSupplier ={
            ...supplierdata,
            status:{id:status.id}
        }
        console.log("STATUS: ",updateSupplier)
        fetch(url_api,{
            method:'PUT',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization':`Bearer ${user?.token}`
            },
            body:JSON.stringify(updateSupplier)
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data.statusCode===200){
                    console.log("EXITO")
                    getnewsupplier()
                }else if(data.error===true){
                    console.log("Error en saveupdate():")
                }
            })
    }

    const getnewsupplier=()=>{
        fetch(url_api,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            }
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                if(data.statusCode===200){
                    setProveedores(data.data);
                }
            })
            .catch((err)=>console.log("Error: ",err));
    }

    const openModalAdd=()=>{
        setShowModalAdd(true);
        setProveedorSeleccionado({
            "name": "",
            "rfc": "",
            "physical_address": "",
            "branch_address": "",
            "email": "",
            "phone_number": "",
            "status": {
                "id": 1
            }
        })
    }

    // función para registrar proveedor
    const savenew=()=>{
        console.log("new:",proveedorSeleccionado)
        fetch(url_api,{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization':`Barer ${user?.token}`
            },
            body:JSON.stringify(proveedorSeleccionado)
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data.statusCode===200){
                    console.log("EXITO")
                }else if(data.error===true){
                    console.log("Error en savenew()")
                }
            }).catch((err)=>console.log("Error: ",err))
    }

    //función para manejar el switch del status del proveedor en el modal
    const changeStatus=(e)=>{
        const newStatus = e.target.checked?1:2;
        setProveedorSeleccionado({
            ...proveedorSeleccionado,
            status:{id:newStatus}
        })
    }

    return (
        <Container style={{height: "90vh", overflowY: "hidden"}}>
            <div style={{ padding: '25px', textAlign: 'center', height: "10vh"}}>
                <h1>Lista de proveedores</h1>
            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => openModalAdd()} className='btn btn-success'>Agregar</button>
            </div>
            {/* TABLA DE PROVEEDORES */}
            <div style={{ overflowY: 'auto', height: '70vh' }}>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{ backgroundColor: '#D1D1D1' }}>#</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre del proveedor</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>RFC</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Dirección</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Número de teléfono</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>correo electrónico</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Estatus</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {proveedores.map((proveedor,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{proveedor.name}</td>
                            <td>{proveedor.rfc}</td>
                            <td>{proveedor.physical_address},{proveedor.branch_address}</td>
                            <td>{proveedor.phone_number}</td>
                            <td>{proveedor.email}</td>
                            <td>{proveedor.status.description}</td>
                            <td>
                                <button onClick={() => handleShow('Editar información de proveedor', proveedor)} style={{ margin: '10px 8px 10px 10px' }} className='btn btn-primary'>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

            {/* MODAL */}
            <Modal style={{ margin: 'auto', top: '15%' }} show={showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Form.Switch checked={!proveedorSeleccionado || proveedorSeleccionado?.status?.id ===1} onChange={changeStatus}/>
                        </div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.name || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="tel" value={proveedorSeleccionado?.phone_number || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,phone_number:e.target.value})}/>
                        <br />
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type='email' value={proveedorSeleccionado?.email || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,email:e.target.value})}/>
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        handleClose();
                        saveupdate();
                    }}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* modal agregar */}
            <Modal style={{ margin: 'auto', top: '5vh', height:'90vh' }} show={showModalAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar proveedor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Form.Switch checked={!proveedorSeleccionado || proveedorSeleccionado?.status?.id ===1} onChange={changeStatus}/>
                        </div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.name || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="tel" value={proveedorSeleccionado?.phone_number || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,phone_number:e.target.value})}/>
                        <br />
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type='email' value={proveedorSeleccionado?.email || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,email:e.target.value})}/>
                        <br />
                        <Form.Label>RFC</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.rfc || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,rfc:e.target.value})}/>
                        <br />
                        <Form.Label>Dirreción de la empresa</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.branch_address || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,branch_address:e.target.value})}/>
                        <br />
                        <Form.Label>Dirección del negocio</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.physical_address || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,physical_address:e.target.value})}/>
                        <br />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        handleClose();
                        savenew()
                    }}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}