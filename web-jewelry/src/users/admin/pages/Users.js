import React, {useContext, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Image, InputGroup} from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {AuthContext} from "../../../auth";
import {users} from "../css/users.css";
import eye from "../../../image/eye-fill.svg";
import eyeSlash from "../../../image/eye-slash-fill.svg";
import { Toaster, toast } from 'sonner'

export const Users = () => {
    // USESTATE PARA MODAL DE AGREGAR
    const [showModalAdd,setShowModalAdd]=useState(false);
    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')
    // USETATE PARA ALMACENAR INFORMACIÓN DE USUARIO SELECCIONADO
    const [usuarioSeleccionado,setUsuarioSeleccionado]=useState([]);
    //USESTATE PARA ALMACENAR USUARIOS
    const [usuarios, setUsuarios] = useState([]);
    //USESTATE PARA MOSTRAR CONTRASEÑA
    const [showPassword,setShowPassword]=useState(false);
    //USESTATE PARA CONTROLAR EL MODAL
    const [showModal,setShowModal]=useState(false);

    const url_api_users = "http://localhost:8080/api/users/"
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        getusersnews()
    },[]);

    //función para cerrar el modal
    const closeModal=()=>{
        setShowModal(false);
        setShowModalAdd(false);
        setShowPassword(false);
        setUsuarioSeleccionado(null);
    }

    const getusersnews= ()=>{
        fetch(url_api_users,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            }
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){
                    setUsuarios(data?.data)
                }
            }).catch((err)=>console.log("Error en consulta de usuarios: ",err))
    }

    //función para abrir el modal
    const openModal=(title,user)=>{
        setTitleModal(title)
        setShowModal(true);
        setUsuarioSeleccionado(user)
    }

    // función para consumir servicio de editar usuario
    const updateUser=()=>{
        const { status, rol, password, ...userData } = usuarioSeleccionado;
        const updatedUser = {
            ...userData,
            status: {id:status?.id},
            rol: {id:rol?.id}
        };
        console.log(updatedUser)
        fetch(url_api_users,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            },
            body:JSON.stringify(updatedUser)
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){

                    getusersnews();
                }
            }).catch((err)=>console.log("Error en updateUser(): ",err))
        closeModal();
        setUsuarioSeleccionado(null);
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
        setUsuarioSeleccionado({
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
        })
    }

    const adduser=()=>{
        fetch(url_api_users,{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization':`Barer ${user?.token}`
            },
            body:JSON.stringify(usuarioSeleccionado)
        }).then((resp)=>resp.json())
            .then((data)=>{
            if(data?.statusCode===200){
                getusersnews()
            }else if(data?.error===true){
                console.log("USUARIO YA EXISTE");
            }
        }).catch((err)=>console.log("Error al agregar en adduser(): ",err))
        setShowModalAdd(false);
    }

    return (
        <Container style={{height: "90vh", overflowY: "hidden"}}>
            <div style={{padding: '25px', textAlign: 'center', height: "10vh"}}>
                <h1>Lista de usuarios</h1>
            </div>
            <Toaster position="top-center" richColors/>
            <div style={{padding: '20px', display: 'flex', justifyContent: 'flex-end'}}>
                <button onClick={openModalAdd} className='btn btn-success'>Agregar</button>
            </div>
            <div style={{ overflowY: 'auto', height: '70vh' }}>
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
                            <td>{usuario?.id}</td>
                            <td>{usuario?.name} {usuario?.surname} {usuario?.second_surname}</td>
                            <td>{usuario?.email}</td>
                            <td>{usuario?.address}</td>
                            {usuario?.status?.description==="Activo"?(<td><div className="circle-green"></div></td>):(<td><div className="circle-red"></div></td>)}
                            <td>
                                <button onClick={()=>openModal('Editar usuario',usuario)} className='btn btn-primary'>Editar</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* MODAL PARA ACTUALIZAR USUARIO*/}
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
                        <Form.Control disabled type='email' value={usuarioSeleccionado?.email || ''}  onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,email:e.target.value})}/>
                        <br />
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.address || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,address:e.target.value})}></Form.Control>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button onClick={()=>updateUser()} style={{ backgroundColor: '#882d38'}}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* MODAL PARA AGREGAR USUARIO */}
            <Modal style={{ margin: 'auto', top: '5vh',height:'90vh'}} show={showModalAdd} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar usuario</Modal.Title>
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
                        <InputGroup>
                            <Form.Control type={showPassword?'text':'password'} value={usuarioSeleccionado?.password || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,password:e.target.value})}/>
                            <Button style={{backgroundColor:'#BDBDBD', borderColor:'transparent', color:'black'}} onClick={()=>setShowPassword(!showPassword)}  >{showPassword?<Image src={eye}/>:<Image src={eyeSlash}/>}</Button>
                        </InputGroup>
                        <br />
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type='text' value={usuarioSeleccionado?.address || ''} onChange={(e)=>setUsuarioSeleccionado({...usuarioSeleccionado,address:e.target.value})}></Form.Control>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button onClick={()=>adduser()} style={{ backgroundColor: '#882d38'}}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
