import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Image, Row } from "react-bootstrap";

export const AdminProducts = () => {
    // USESTATE PARA ALMACENAR LAS CATEGORIAS
    const [categorias,setCategorias]=useState([
        {
            "id":1,
            "description":"Anillo"
        },
        {
            "id":2,
            "description":"Collar"
        }
    ]);

    //USESTATE PARA ESTADO DE MODAL
    const [showModal,setShowModal]=useState(false);

    // USESTATE PARA MODIFICAR EL TITULO DEL MODAL
    const [titleModal, setTitleModal] = useState('')

    //USESTATE PARA ALMACENAR LOS PROVEDORES
    const [proveedores, setProveedores]=useState([
        {
            "id":1,
            "name": "proveedor 1",
            "rfc": "RFC123456789",
            "physical_address": "Dirección física del proveedor",
            "branch_address": "Dirección secundaria del proveedor",
            "email": "proveedor1@example.com",
            "phone_number": "1234567890",
            "status": {
                "id": 1
            }
        },
        {
            "id":2,
            "name": "proveedor 2",
            "rfc": "RFC123456789",
            "physical_address": "Dirección física del proveedor",
            "branch_address": "Dirección secundaria del proveedor",
            "email": "proveedor2@example.com",
            "phone_number": "1234567890",
            "status": {
                "id": 1
            }
        }
    ]);

    // USESTATE PARA ALMACENAR LA INFORMACIÓN DEL PRODUCTO SELECIONADO
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    //USESTATE PARA ALMACENAR LOS ESTATUS EXISTENTES EN LA BASE DE DATOS
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

    //USESTATE PARA ALMACENAR PRODUCTOS
    const [productos,setProductos]=useState([
        {
            "id":1,
            "name": "Prueba1",
            "description": "Producto 1",
            "stock": 100,
            "imageArchivo": "https://m.media-amazon.com/images/I/61gBBKP+4mL._AC_SX679_.jpg",
            "price": 99,
            "discount_price": 0,
            "category": {
                "id": 1
            },
            "status": {
                "id": 1
            },
            "suppliers": {
                "id": 1
            }
        },
        {
            "id":2,
            "name": "Prueba2",
            "description": "Producto 2",
            "stock": 100,
            "imageArchivo": "https://m.media-amazon.com/images/I/61h+Y9mQzgL._AC_SX679_.jpg",
            "price": 99,
            "discount_price": 0.3,
            "category": {
                "id": 1
            },
            "status": {
                "id": 2
            },
            "suppliers": {
                "id": 1
            }
        },
        {
            "id":3,
            "name": "Prueba3",
            "description": "Producto 3",
            "stock": 100,
            "imageArchivo": "https://m.media-amazon.com/images/I/61sM50EV8zL._AC_SY695_.jpg",
            "price": 99,
            "discount_price": 0.5,
            "category": {
                "id": 2
            },
            "status": {
                "id": 1
            },
            "suppliers": {
                "id": 2
            }
        }
    ]);

    /*useEffect(()=>{
        {/!* consulta al servicio de productos *!/}
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((resp)=>{
                setProductos(resp)
            }).catch((error)=>{
                console.log("Error al consultar productos: ",error)
        })

        {/!* consulta al servicio de categorias *!/}
        fetch("https://random-data-api.com/api/v2/appliances?size=8")
            .then((res)=>
            res.json()
            ).then((resp)=>{
                setCategorias(resp)
        }).catch((error)=>{
            console.log("Error al consultar categorias de productos",error);
        })
    },[])*/


    const handleClose=()=>{
        setShowModal(false);
        setProductoSeleccionado(null);
    }
    const handleShow = (title, producto = null) => {
        setShowModal(true);
        setTitleModal(title);

        if (producto) {
            setProductoSeleccionado(producto);
        } else {
            setProductoSeleccionado({
                id: '', // Genera un ID único o deja vacío para un nuevo producto
                name: '',
                description: '',
                stock: 0,
                price: 0,
                discount_price: 0,
                category: {
                    id: '', // ID de la categoría por defecto
                },
                status: {
                    id: 1, // ID de estatus por defecto
                },
                suppliers: {
                    id: '', // ID del proveedor por defecto
                },
                imageArchivo: '', // URL por defecto de la imagen, si es necesario
            });
        }
    };

    {/* funcion que maneja los cambios de la CATEGORIA del producto
        por si se llega a cambiar */}
    const categoryChange=(e)=>{
        {/* se almacena la nueva categoria */}
        const newcategoria = e.target.value;
        {/* se setea unicamente la nueva categoria*/}
        setProductoSeleccionado({
            ...productoSeleccionado,
            category:{id:newcategoria},
        })
    }

    {/* función que maneja los cambios de los PROVEEDORES del producto
        por si se llega a cambiar*/}
    const changeSupplier=(e)=>{
        const newProveedor = e.target.value;
        setProductoSeleccionado({
            ...productoSeleccionado,
            suppliers:{id:newProveedor}
        })
    }

    {/* funcion para consumo de servicio de ACTUALIZACIÓN*/}
    const saveupdate=()=>{
        console.log(productoSeleccionado)
    }

    {/* función para manejar el switch del estatus del producto en el modal*/}
    const changeStatus=(e)=>{
        const newStatus = e.target.checked?1:2;
        setProductoSeleccionado(({
            ...productoSeleccionado,
            status:{id:newStatus}
        }))
    }

    return (
        <Container>
            <div style={{ padding: '25px', textAlign: 'center' }}>
                <h1>Inventario</h1>
            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => handleShow('Agregar proveedor')} className='btn btn-success'>Agregar</button>
            </div>
            {/* TABLA DE PRODUCTOS EN EL INVENTARIO */}
            <div style={{ overflowY: 'scroll', height: '400px' }}>
                <Table>
                    <thead>
                    <tr>
                        <th style={{ backgroundColor: '#D1D1D1' }}>#</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Nombre</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Descripción</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Stock</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Precio</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Descuento</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Estatus</th>
                        <th style={{ backgroundColor: '#D1D1D1' }}>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productos.map(producto=>(
                        <tr>
                            <td>{producto.id}</td>
                            <td>{producto.name}</td>
                            <td>{producto.description}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.price}</td>
                            <td>{producto.discount_price}</td>
                            <td>
                                {status.find((statu)=>statu.id===producto.status?.id)?.description || 'Status desconocido'}
                            </td>
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
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control type='text' value={productoSeleccionado?.name || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,name:e.target.value})}/>
                        <br />
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={productoSeleccionado?.description || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,description:e.target.value})}/>
                        <br />
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='number' value={productoSeleccionado?.stock || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,stock:parseInt(e.target.value)})}/>
                        <br />
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type='number' value={productoSeleccionado?.price || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,price:parseFloat(e.target.value)})}/>
                        <br />
                        <Form.Label>Descuento</Form.Label>
                        <Form.Control type='number' value={productoSeleccionado?.discount_price || ''} onChange={(e)=>setProductoSeleccionado({...productoSeleccionado,discount_price:parseFloat(e.target.value)})}/>
                        <br />
                        {/*select de categoria*/}
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select onChange={(e)=>categoryChange(e)} value={productoSeleccionado?.category?.id || ''}>
                            <option value="">Seleccione una opción</option>
                            {/* mapeo de categorias*/}
                            {categorias.map((categoria )=>(
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.description}
                                </option>
                            ))}
                        </Form.Select>
                        <br />
                        <Form.Label>Proveedor</Form.Label>
                        <Form.Select onChange={(e)=>changeSupplier(e)} value={productoSeleccionado?.suppliers?.id || ''}>
                            <option value="">Seleccione una opción</option>
                            {/* mapeo de proveedores*/}
                                {proveedores.map((proveedor)=>(
                                    <option key={proveedor.id} value={proveedor.id}>
                                        {proveedor.name}
                                    </option>
                                ))}
                        </Form.Select>
                        <br/>
                        <Form.Label>Estatus</Form.Label>
                        <Form.Switch checked={!productoSeleccionado || productoSeleccionado.status.id === 1} onChange={changeStatus} label={productoSeleccionado?.status?.id===1?'Activo':'Inactivo'}/>
                        <br/>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Col xs={6} md={4}>
                                {productoSeleccionado?.imageArchivo && (
                                    <Image style={{maxWidth:"100%"}} src={productoSeleccionado.imageArchivo} rounded />
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
                    }}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
