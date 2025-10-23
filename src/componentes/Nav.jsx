import {useState} from 'react'

function Nav() {
    return (
    <>
    <nav className="navbar" style={{
            backgroundColor: "white",
            margin: "1%",
            position: "sticky",
            zIndex: "20",
        }}>
        <ul style={{justifyContent: "space-around",display: "flex", flex:"wrap", listStyle:"none"}}>
            <li><a href="#" className="lista">Inicio</a></li>
            <li><a href="#" className="lista">Aros</a></li>
            <li><a href="#" className="lista">Collares</a></li>
            <li><a href="#" className="lista">Colecciones</a></li>
            <li><a href="#" className="lista">Preguntas frecuentes</a></li>
            <li><a href="#" className="lista">Contacto</a></li>
        </ul>
    </nav>
    <hr />
    </>
    );
} export default Nav;
