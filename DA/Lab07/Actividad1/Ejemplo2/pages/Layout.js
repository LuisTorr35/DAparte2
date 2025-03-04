import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <Link to="/">Home</Link> <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/blogs">Blogs</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/contact">Contact</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
};
export default Layout;
