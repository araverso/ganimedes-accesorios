import React from 'react'

function Header() {
    return (
    <>
        <header style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: "100%",
                padding: "1.5%",
                
}            }>
            <div class="logo">
                <a href='#'><img src="/src/img/logo/logo.png" alt="logo de Ganímedes, estrella en negro." width="100px" /></a>
            </div>
            <div class="header-texto">
                    <p>Ganímedes</p>
                    <p>Accesorios hechos a mano</p>
            </div>            
        </header>
        
    </>
    );
} export default Header;