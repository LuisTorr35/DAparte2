import { useParams } from "react-router-dom";
import { users } from "../data";

const UsuariosDetalles = () => {
    const { id } = useParams();
    const user = users.find(user => user.id === id);

    if (!user) {
        return (
            <div className="content">
                <h2>Usuario no encontrado</h2>
                <p>No se encontró información para el usuario con ID: {id}.</p>
            </div>
        );
    }

    return (
        <div className="content">
            <h2>Detalles del Usuario: {user.name}</h2>
            <p>ID: {user.id}</p>
            <p>Edad: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UsuariosDetalles;
