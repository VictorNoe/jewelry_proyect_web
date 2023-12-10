import React, {useContext,useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, InputGroup} from "react-bootstrap";
import {AuthContext} from "../../../auth";
import axios from 'axios';
import { Toaster, toast } from 'sonner'

export const AdminProducts = () => {
    const [show, setShow] = useState(false);
    // usestate para almacenar las categorias
    const [categorias,setCategorias]=useState([]);

    // usestate para almacenar los proveedores
    const [proveedores,setProveedores]=useState([]);

    // usestate para estado de modal
    const [showModal,setShowModal]=useState(false);

    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')

    // USESTATE PARA ALMACENAR LA INFORMACIÓN DEL PRODUCTO SELECIONADO
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    //USESTATE PARA ALMACENAR PRODUCTOS
    const [productos,setProductos]=useState([]);

    // usestate para modal de eliminar
    const [showModalDelete, setShowModalDelete]=useState(false);

    const url_api_products='http://localhost:8080/api/products/all/';
    const url_api_category='http://localhost:8080/api/category/';
    const url_api_productsPost='http://localhost:8080/api/products/';
    const url_api_suppliers="http://localhost:8080/api/suppliers/"
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        getproducts();
        getsuppliers();
        getcategories();
    },[]);

    // funcion para obtener productos actualizados despues de una operación
    const getproducts=()=>{
        fetch(url_api_products,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            }
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){
                    setProductos(data?.data);
                }else if(data?.error===true){
                    toast.warning("Error al cargar productos");
                }
            }).catch((err)=>console.log("Error: ",err));
    }

    // funcion para obtener las categorias de los productos
    const getcategories=()=>{
        fetch(url_api_category,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            }
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){
                    setCategorias(data?.data);
                }else if(data?.error===true){
                    toast.warning("Error al cargar categorias de productos");
                }
            }).catch((err)=>console.log("Error: ",err));
    }
    const getsuppliers=()=>{
        fetch(url_api_suppliers,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            }
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){
                    setProveedores(data?.data);
                }else if(data?.error===true){
                    toast.warning("Error al cargar proveedores");
                }
            }).catch((err)=>console.log("Error: ",err));
    }

    const handleClose=()=>{
        setShowModal(false);
        setProductoSeleccionado(null);
        setShowModalDelete(false);
    }
    const handleShow = (title, producto = null) => {
        setShowModal(true);
        setTitleModal(title);

        if (producto) {
            setProductoSeleccionado(producto);
        } else {
            setProductoSeleccionado({
                name: '',
                description: '',
                stock: 0,
                price: 0,
                discount_price: 0,
                category: {
                    id: 1
                },
                status: {
                    id: 1,
                },
                suppliers: {
                    id: 1,
                },
                image: '',
            });
        }
    };


    const saveupdate=()=>{
        let method='';
        if(titleModal==="Agregar producto"){
            method='POST';
        }else{
            method='PUT'
        }
        fetch(url_api_productsPost,{
            method:method,
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user?.token}`
            },
            body:JSON.stringify(productoSeleccionado)
        }).then((resp)=>resp.json())
            .then((data)=>{
                if(data?.statusCode===200){
                    titleModal==="Agregar producto"?toast.success('Producto registrado'):toast.success('Producto actualizado')
                    getproducts()
                }else if(data?.error===true){
                    titleModal==="Agregar producto"?toast.error("Error al registrar"):toast.error("Error al actualizar");
                }
            }).catch((err)=>console.log("Error peticion en saveupdate(): ",err));
    }

    {/* función para manejar el switch del estatus del producto en el modal*/}
    const changeStatus=(e)=> {
        const newStatus = e.target.checked ? 1 : 2;
        setProductoSeleccionado(({
            ...productoSeleccionado,
            status: {id: newStatus}
        }))
    }

    // FUNCIÓN PARA CARGAR IMAGEN
    const fileChange=async (e)=>{
        const file = e?.target?.files[0];
        const data = new FormData();

        data.append("file",file);
        data.append("upload_preset","PRESET_SIVEJO");

        const response =  await axios.post("https://api.cloudinary.com/v1_1/dzcgnz5tp/image/upload",data);
        setProductoSeleccionado({
            ...productoSeleccionado,
            image:response?.data?.secure_url
        })
    }

    return (
        <Container style={{height: "90vh", overflowY: "hidden"}}>
            <div style={{ padding: '25px', textAlign: 'center',height: "10vh" }}>
                <h1>Inventario</h1>
            </div>
            <Toaster position="top-center" richColors/>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => handleShow('Agregar producto')} className='btn btn-success'>Agregar</button>
            </div>
            {/* TABLA DE PRODUCTOS EN EL INVENTARIO */}
            <div style={{ overflowY: 'auto', height: '70vh' }}>
                <Table >
                    <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{ backgroundColor: '#D1D1D1'}}>#</th>
                        <th style={{ backgroundColor: '#D1D1D1',textAlign:'center' }}>Imagen</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Descripción</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Stock</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Precio</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Descuento</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Categoría</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Proveedor</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Estatus</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productos.map(producto=>(
                        <tr>
                            <td>{producto?.id}</td>
                            <td style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                <img
                                    src={producto?.image}
                                    alt={`Imagen de ${producto?.name}`}
                                    style={{ width: '110px', height: '100px' }}
                                />
                            </td>
                            <td>{producto?.name}</td>
                            <td>{producto?.description}</td>
                            <td>{producto?.stock}</td>
                            <td>${producto?.price}</td>
                            <td>${producto?.discount_price}</td>
                            <td>{producto?.category?.description}</td>
                            <td>{producto?.suppliers?.name}</td>
                            {producto?.status?.description==="Activo"?(<td><div className="circle-green"></div></td>):(<td><div className="circle-red"></div></td>)}
                            <td>
                                <button className='btn btn-primary' onClick={()=>handleShow("Editar información de producto",producto)}>Editar</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* MODAL */}
            <Modal style={{ margin: 'auto', top: '5vh',height:'90vh' }} show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Form.Switch checked={!productoSeleccionado || productoSeleccionado?.status?.id === 1} onChange={changeStatus} label={productoSeleccionado?.status?.id===1?'Producto Activo':'Producto Inactivo'}/>
                            <br/>
                        </div>
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control type='text' value={productoSeleccionado?.name || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={productoSeleccionado?.description || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,description:e.target.value})}/>
                        <br/>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='number' value={productoSeleccionado?.stock || ''} onChange={(e)=>{const inputstock = parseInt(e.target.value);if(inputstock>=0 || e.target.value==='') setProductoSeleccionado({...productoSeleccionado,stock:parseInt(e.target.value)})}}/>
                        <br/>
                        <Form.Label>Precio</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon">$</InputGroup.Text>
                            <Form.Control type='number' value={productoSeleccionado?.price || ''} onChange={(e)=> {const inputprice = parseFloat(e.target.value); if (inputprice >= 0 || e.target.value === '') {setProductoSeleccionado({...productoSeleccionado, price: parseFloat(e.target.value)})}}}/>
                        </InputGroup>

                        <br/>
                        <Form.Label>Descuento</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon">$</InputGroup.Text>
                            <Form.Control type='number' value={productoSeleccionado?.discount_price || ''} onChange={(e)=>{const inputdiscount=parseFloat(e.target.value); if(inputdiscount>=0 || e.target.value===''){setProductoSeleccionado({...productoSeleccionado,discount_price:parseFloat(e.target.value)})}}}/>
                        </InputGroup>

                        <br />
                        {titleModal==='Agregar producto'?(
                            <div>
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control as="select"  onChange={(e) => {const categoryId = parseInt(e.target.value, 10); setProductoSeleccionado(prevState => ({...prevState, category: {...prevState?.category, id: categoryId}}));}}>
                                    {categorias.map((categoria) => (
                                        <option key={categoria?.id} value={categoria?.id}>
                                            {categoria?.description}
                                        </option>
                                    ))}
                                </Form.Control>
                                <br />
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control as="select" onChange={(e)=>{const supplierId=parseInt(e.target.value, 10); setProductoSeleccionado(prevState=>({...prevState,suppliers:{...prevState.suppliers,id:supplierId}}))}} >
                                    {proveedores.map((proveedor)=>(
                                        <option value={proveedor?.id}>{proveedor?.name}</option>
                                    ))}
                                </Form.Control>
                                <br/>
                            </div>
                        ):(
                            <div>
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control disabled='true' type='text' value={productoSeleccionado?.category?.description}/>
                                <br />
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control disabled='true' type='text' value={productoSeleccionado?.suppliers?.name}/>
                                <br/>
                            </div>
                        )}
                        {}

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" onChange={fileChange}/>
                        </Form.Group>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Col xs={6} md={4}>
                                {productoSeleccionado?.image && (
                                    <img style={{maxWidth:"100%"}} src={productoSeleccionado?.image} alt='Vista previa' rounded />
                                )}
                            </Col>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=> {
                        handleClose();
                        saveupdate();
                    }} style={{ backgroundColor: '#882d38'}}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
