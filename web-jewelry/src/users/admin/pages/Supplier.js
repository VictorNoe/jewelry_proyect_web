import React, {useContext, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {AuthContext} from "../../../auth";
<<<<<<< HEAD
=======
import { Toaster, toast } from 'sonner'
>>>>>>> adminfront

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
<<<<<<< HEAD
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
=======
       getnewsupplier()
    }, []);
>>>>>>> adminfront

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
<<<<<<< HEAD
            status:{id:status.id}
        }
        console.log("STATUS: ",updateSupplier)
=======
            status:{id:status?.id}
        }
>>>>>>> adminfront
        fetch(url_api,{
            method:'PUT',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization':`Bearer ${user?.token}`
            },
            body:JSON.stringify(updateSupplier)
        }).then((resp)=>resp.json())
            .then((data)=>{
<<<<<<< HEAD
                if(data.statusCode===200){
                    console.log("EXITO")
                    getnewsupplier()
                }else if(data.error===true){
=======
                if(data?.statusCode===200){
                    toast.success('Proveedor actualizado')
                    getnewsupplier()
                }else if(data?.error===true){
                    toast.error("Error al actualizar");
>>>>>>> adminfront
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
<<<<<<< HEAD
                if(data.statusCode===200){
                    setProveedores(data.data);
=======
                if(data?.statusCode===200){
                    setProveedores(data?.data);
>>>>>>> adminfront
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
<<<<<<< HEAD
        console.log("new:",proveedorSeleccionado)
        fetch(url_api,{
            method:'POST',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization':`Barer ${user?.token}`
=======
        fetch(url_api,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
>>>>>>> adminfront
            },
            body:JSON.stringify(proveedorSeleccionado)
        }).then((resp)=>resp.json())
            .then((data)=>{
<<<<<<< HEAD
                if(data.statusCode===200){
                    console.log("EXITO")
                }else if(data.error===true){
=======
                if(data?.statusCode===200){
                    toast.success('Proveedor registrado')
                    getnewsupplier()
                }else if(data?.error===true){
                    toast.error('Error al registrar proveedor')
>>>>>>> adminfront
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
            <Toaster position="top-center" richColors/>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => openModalAdd()} className='btn btn-success'>Agregar</button>
            </div>
            {/* TABLA DE PROVEEDORES */}
            <div style={{ overflowY: 'auto', height: '70vh' }}>
                <Table>
                    <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{ backgroundColor: '#D1D1D1' }}>#</th>
<<<<<<< HEAD
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre del proveedor</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>RFC</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Dirección</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Número de teléfono</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>correo electrónico</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Estatus</th>
=======
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>RFC</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Dirección</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Teléfono</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>correo electrónico</th>
                        <th style={{ backgroundColor: '#D1D1D1' }} className="text-center">Estatus</th>
>>>>>>> adminfront
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {proveedores.map((proveedor,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
<<<<<<< HEAD
                            <td>{proveedor.name}</td>
                            <td>{proveedor.rfc}</td>
                            <td>{proveedor.physical_address},{proveedor.branch_address}</td>
                            <td>{proveedor.phone_number}</td>
                            <td>{proveedor.email}</td>
                            <td>{proveedor.status.description}</td>
=======
                            <td>{proveedor?.name}</td>
                            <td>{proveedor?.rfc}</td>
                            <td>{proveedor?.physical_address},{proveedor?.branch_address}</td>
                            <td>{proveedor?.phone_number}</td>
                            <td>{proveedor?.email}</td>
                            {proveedor?.status?.description==="Activo"?(<td><div className="circle-green"></div></td>):(<td><div className="circle-red"></div></td>)}
>>>>>>> adminfront
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
            <Modal style={{ margin: 'auto', top: '5vh', height:'90vh' }} show={showModalEdit} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
<<<<<<< HEAD
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
=======
                            <Form.Switch checked={!proveedorSeleccionado || proveedorSeleccionado?.status?.id ===1} onChange={changeStatus} label={proveedorSeleccionado?.status?.id===1?'Proveedor Activo':'Proveedor Inactivo'}/>
                        </div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control required type='text' value={proveedorSeleccionado?.name || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control required type="tel" value={proveedorSeleccionado?.phone_number || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,phone_number:e.target.value})}/>
                        <br />
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control required type='email' value={proveedorSeleccionado?.email || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,email:e.target.value})}/>
                        <br />
                        <Form.Label>RFC</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.rfc || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,rfc:e.target.value})}/>
                        <br />
                        <Form.Label>Dirección fisica del proveedor</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.physical_address || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,physical_address:e.target.value})}/>
                        <br />
                        <Form.Label>Dirección secundaria</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.branch_address || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,branch_address:e.target.value})}/>
>>>>>>> adminfront
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
<<<<<<< HEAD
                    <Button variant="primary" onClick={()=>{
                        handleClose();
                        saveupdate();
                    }}>
=======
                    <Button onClick={()=>{
                        handleClose();
                        saveupdate();
                    }} style={{ backgroundColor: '#882d38'}}>
>>>>>>> adminfront
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
<<<<<<< HEAD
                            <Form.Switch checked={!proveedorSeleccionado || proveedorSeleccionado?.status?.id ===1} onChange={changeStatus}/>
                        </div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control type='text' value={proveedorSeleccionado?.name || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="tel" value={proveedorSeleccionado?.phone_number || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,phone_number:e.target.value})}/>
=======
                            <Form.Switch checked={!proveedorSeleccionado || proveedorSeleccionado?.status?.id ===1} onChange={changeStatus} label={proveedorSeleccionado?.status?.id===1?'Activo':'Inactivo'}/>
                        </div>
                        <Form.Label>Nombre del proveedor</Form.Label>
                        <Form.Control required type='text' value={proveedorSeleccionado?.name || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control required type="tel" value={proveedorSeleccionado?.phone_number || ''} onChange={(e)=>setProveedorSeleccionado({...proveedorSeleccionado,phone_number:e.target.value})}/>
>>>>>>> adminfront
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
<<<<<<< HEAD
                    }}>
=======
                    }} style={{ backgroundColor: '#882d38'}}>
>>>>>>> adminfront
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}