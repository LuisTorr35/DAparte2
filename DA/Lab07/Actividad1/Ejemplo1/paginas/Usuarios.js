import { Link } from "react-router-dom";

const Usuarios = () => {
    const users = [
        { id: '2022200321', name: "Apaza Marce Fernando Gabriel" },
        { id: '2022245651', name: "Huaroc Condori Andre Nicolas" },
        { id: '2022245671', name: "Huayllani Carrasco Vladimir Cesar" },
        { id: '2022250761', name: "Torres Quispe Luis Enrique" }
    ];

    return (
        <div className="content">
            <h2>Usuarios de esta actividad</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;
