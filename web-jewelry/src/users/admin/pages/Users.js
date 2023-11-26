import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const Users = () => {
    // USESTATE PARA MODAL DE AGREGAR
    const [showModalAdd,setShowModalAdd]=useState(false);
    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')
    // USETATE PARA ALMACENAR INFORMACIÓN DE USUARIO SELECCIONADO
    const [usuarioSeleccionado,setUsuarioSeleccionado]=useState([]);
    //USESTATE PARA ALMACENAR USUARIOS
    const [usuarios, setUsuarios] = useState([
        {
            "id": 1,
            "name": "Omar",
            "email": "omi@gmail.com",
            "password": "123#$%$%&&/!|",
            "surname": "Verdayes",
            "second_surname": "Santander",
            "address": "Su casa",
            "rol": {"id": 2},
            "status": {"id": 1}
        },
        {
            "id": 2,
            "name": "ULI",
            "email": "uli@gmail.com",
            "password": "456%#&(/)",
            "surname": "garci",
            "second_surname": "",
            "address": "Mi casa",
            "rol": {"id": 2},
            "status": {"id": 2}
        }
    ]);

    //USESTATE PARA ALMACENAR STATUS EXISTENTES DE LA BDD
    const [status,setStatus]=useState([
        {
            "id":1,
            "description":"Activo"
        },
        {
            "id":2,
            "description":"Inactivo"
        }
    ]);

    //USESTATE PARA MOSTRAR CONTRASEÑA
    const [showPassword,setShowPassword]=useState(false);

    //USESTATE PARA CONTROLAR EL MODAL
    const [showModal,setShowModal]=useState(false);

    /*useEffect(()=>{
        //consumir servicio de consulta de usuario
        fetch("")
            .then((res)=>res.json())
            .then((resp)=>setUsuarios(resp))
            .catch((error)=>{
                console.log("Error al consultar usuarios: ",error);
            })
    },[]);*/

    //función para cerrar el modal
    const closeModal=()=>{
        setShowModal(false);
        setShowModalAdd(false);
        setShowPassword(false);
    }

    //función para abrir el modal
    const openModal=(title,user)=>{
        setTitleModal(title)
        setShowModal(true);
        setUsuarioSeleccionado(user)
    }

    // función para consumir servicio de editar usuario
    const updateUser=(user)=>{
        console.log(user)
        closeModal()
    }
    //función para manejar el switch del status del usuario en el modal
    const changeStatus=(e)=>{
        const newStatus = e.target.checked?1:2;
        setUsuarioSeleccionado({
            ...usuarioSeleccionado,
            status:{id:newStatus}
        })
    }

    const openModalAdd=()=>{
        setShowModalAdd(true);
        const newuser={
            "email": "",
            "password": "",
            "name": "",
            "surname": "",
            "second_surname": "",
            "address": "",
            "rol": {
                "id": 2
            },
            "status": {
                "id": 1
            }
        }
    }

    return (
        <Container>
            <div style={{padding: '25px', textAlign: 'center'}}>
                <h1>Lista de usuarios</h1>
            </div>
            <div style={{padding: '20px', display: 'flex', justifyContent: 'flex-end'}}>
                <button onClick={openModalAdd} className='btn btn-success'>Agregar</button>
            </div>
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th style={{ backgroundColor: '#D1D1D1' }}>#</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre completo</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Correo electrónico</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Dirección</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Estatus</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usuarios.map(usuario => (
                        <tr>
                            <td>{usuario.id}</td>
                            <td>{usuario.name} {usuario.surname} {usuario.second_surname}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.address}</td>
                            <td>
                                {status.find((statu)=>statu.id===usuario.status?.id)?.description || 'Status desconocido'}
                            </td>
                            <td>
                                <button onClick={()=>openModal('Editar usuario',usuario)} className='btn btn-primary'>Editar</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* MODAL */}
            <Modal style={{ margin: 'auto', top: '5vh',height:'90vh'}} show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Form.Switch checked={!usuarioSeleccionado || usuarioSeleccionado?.status?.id === 1} onChange={changeStatus} label={usuarioSeleccionado?.status?.id===1?'Usuario Activo':'Usuario Inactivo'}/>
                        </div>
                        <br/>
                        <Form.Label>Nombre del usuario</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.name || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Apellido paterno</Form.Label>
                        <Form.Control type="text" value={usuarioSeleccionado?.surname || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,surname:e.target.value})}/>
                        <br />
                        <Form.Label>Apellido materno</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.second_surname || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,second_surname:e.target.value})}/>
                        <br />
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type='email' value={usuarioSeleccionado?.email || ''}  onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,email:e.target.value})}/>
                        <br />
                        <Form.Label>Contraseña</Form.Label>
                        <div style={{display:'flex'}}>
                            <Form.Control type={showPassword?'text':'password'} value={usuarioSeleccionado?.password || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,password:e.target.value})}/>
                            <span style={{marginLeft:'10px',cursor:'pointer',fontSize:'25px'}} onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword?'🙉':'🙈'}
                            </span>
                        </div>
                        <br />
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.address || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,address:e.target.value})}></Form.Control>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=>updateUser(usuarioSeleccionado)}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* MODAL PARA AGREGAR USUARIO */}
            <Modal style={{ margin: 'auto', top: '5vh',height:'90vh'}} show={showModalAdd} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Form.Switch checked={!usuarioSeleccionado || usuarioSeleccionado?.status?.id === 1} onChange={changeStatus} label={usuarioSeleccionado?.status?.id===1?'Usuario Activo':'Usuario Inactivo'}/>
                        </div>
                        <br/>
                        <Form.Label>Nombre del usuario</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.name || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Apellido paterno</Form.Label>
                        <Form.Control type="text" value={usuarioSeleccionado?.surname || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,surname:e.target.value})}/>
                        <br />
                        <Form.Label>Apellido materno</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.second_surname || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,second_surname:e.target.value})}/>
                        <br />
                        <FloatingLabel label="Correo electrónico">
                            <Form.Control type="email" value={usuarioSeleccionado?.email} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,email:e.target.value})}/>
                        </FloatingLabel>
                        <br />
                        <Form.Label>Contraseña</Form.Label>
                        <div style={{display:'flex'}}>
                            <Form.Control type={showPassword?'text':'password'} value={usuarioSeleccionado?.password || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,password:e.target.value})}/>
                            <span style={{marginLeft:'10px',cursor:'pointer',fontSize:'25px'}} onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword?'🙉':'🙈'}
                            </span>
                        </div>
                        <br />
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.address || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,address:e.target.value})}></Form.Control>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=>updateUser(usuarioSeleccionado)}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
