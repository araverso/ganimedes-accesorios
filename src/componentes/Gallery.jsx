import React from 'react';
import { useState } from 'react';
import "/src/estilo/gallery.css";

function Gallery() {

    const images = [ //define tordas las imagentes
        {
            normal: "/src/img/presentacion/aros.png",
            hover: "/src/img/presentacion/aros_magic_amarillo.jpg",
            link: "#",
            title: "Ver más"
        },
        {
            normal: "/src/img/presentacion/collares.png",
            hover: "/src/img/presentacion/collares.jpg",
            link: "#",
            title: "Ver más"
        },
        {
            normal: "/src/img/presentacion/colecciones.png",
            hover: "/src/img/presentacion/aros_magic_amarillo_artistico.jpg",
            link: "#",
            title: "Ver más"
        }
    ];

    return (
        <>
            <section className="seccion">
                <h2 className="titulo">NUESTROS PRODUCTOS</h2>
                <div className="grilla-inicio">
                    {images.map((item, index) => (
                        <div key={index} className="grilla-inicio-item">
                            <div>
                                <a href={item.link}>
                                    <div className="contenedor">
                                        <img 
                                            src={item.normal} 
                                            alt={`Producto ${index + 1}`} 
                                            width="70%" 
                                            className="imagen" 
                                        />
                                        <div className="transicion">
                                            <img 
                                                src={item.hover} 
                                                width="70%" 
                                                alt={`Producto ${index + 1} hover`}
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="boton-inicio">
                                <a href={item.link} className="titulo-boton">{item.title}</a>
                                <div className="transicion-linea"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Gallery;
