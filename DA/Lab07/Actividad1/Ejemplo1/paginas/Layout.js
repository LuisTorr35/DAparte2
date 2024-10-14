import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/users">Usuarios</Link></li>
                </ul>
            </nav>

            <Outlet />

            <footer>
                <p> Ejemplo de la Actividad I </p>
            </footer>
        </>
    );
};

export default Layout;
