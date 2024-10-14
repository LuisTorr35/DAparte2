const Sobre = () => {
    return (
        <div className="content">
            <h2>Sobre nosotros</h2>
            <p>
                Hemos implementado una aplicación web de una sola página (SPA) utilizando <strong>React Router</strong>. Este proyecto está diseñado para demostrar cómo funciona el enrutamiento en aplicaciones React, permitiendo la navegación entre diferentes vistas sin recargar la página.
            </p>
            <p>
                La aplicación está estructurada con varias páginas, entre las que se incluyen:
            </p>
            <ul>
                <li><strong>Inicio:</strong> Presenta una sección de bienvenida con un diseño estilizado y un campo de búsqueda.</li>
                <li><strong>Acerca de:</strong> Proporciona información sobre el propósito de la actividad y las tecnologías utilizadas.</li>
                <li><strong>Usuarios:</strong> Muestra una lista de usuarios simulados con la capacidad de acceder a detalles de cada uno.</li>
                <li><strong>404 - Página no encontrada:</strong> Gestiona rutas no definidas para asegurar una mejor experiencia de usuario.</li>
            </ul>
        </div>
    );
};

export default Sobre;
