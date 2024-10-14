import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import About from "./paginas/Sobre";
import Users from "./paginas/Usuarios";
import UserDetails from "./paginas/UsuariosDetalles";
import NoPage from "./paginas/NoPage";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/:id" element={<UserDetails />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
