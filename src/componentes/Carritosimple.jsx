import { useState } from 'react';
import "/src/estilo/carrito.css"

function Layout({ children }) { //el renderizado de un componente está adentro de otro {children}
return ( //imita html
    <div style={{backgroundColor:"#bad5ebff", padding:"2%", display: 'flex', justifyContent:"space-around"}}>
        <h1>Carrito:</h1>
        <div>{children}</div>
    </div>
);
}


function ProductoList({ agregarAlCarrito }) {
const productos = [
    { id: 1, nombre: 'Collares', precio: 4000 },
    { id: 2, nombre: 'Aros', precio: 3500 },
    { id: 3, nombre: 'Collar 2', precio: 4000},
];

return (
    <div>
    <h2>Productos Disponibles</h2>
    {productos.map((producto) => (
        <div key={producto.id} className='elemento'>
        <span>{producto.nombre} - ${producto.precio.toFixed(2)}</span>
        <button
            onClick={() => agregarAlCarrito(producto)} className='boton'
        >
            Agregar
        </button>
        </div>
    ))}
    </div>
);
}

function Carrito({ carrito, vaciarCarrito }) {
// Calcular el total de la compra, agarra todos los productos del carrito, recorre de cada uno el precio y los suma, sino devuelve cero?
const total = carrito.reduce((sum, item) => sum + item.precio, 0);

return (
    <div>
        <hr />
    <h2>Carrito de Compras</h2>
    {carrito.length === 0 ? ( //si el largo del carrito es cero? entonces esta vacio sino devuelve los prodtuctos
        <p>El carrito está vacío</p>
    ) : (
        <>
        {carrito.map((item) => ( //deberia ir key pero es otra manera, aunque key va con id creo
            <div className='elemento'>
            {item.nombre} - ${item.precio.toFixed(3)}
            </div>
        ))}
        
        {/* Muestra el total de la compra */}
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
            Total: ${total.toFixed(3)} {/*tres decimales */}
        </div>
        
        <button
            onClick={vaciarCarrito}
            className="boton"        >
            Vaciar Carrito
        </button>
        </>
    )}
    </div>
);
}

function EcommerceTotal() {
const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
};

const vaciarCarrito = () => {
    setCarrito([]);
};

return ( //acá se llama a layout con el children
    <Layout> 
        <div>
            <ProductoList agregarAlCarrito={agregarAlCarrito} className="elemento"/>
        </div>
        <div>
            <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
        </div>
    </Layout>
);
} export default EcommerceTotal;