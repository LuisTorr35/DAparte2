import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();
function Component1() {
    const [user, setUser] = useState("FERNANDO APAZA");
    return (
        <UserContext.Provider value={user}>
            <div className="component component1">
                <h1>{`Hello, ${user}!`}</h1>
                <Component2 />
            </div>
        </UserContext.Provider>
    );
}
function Component2() {
    return (
        <div className="component component2">
            <h1>Estudiante UCSM</h1>
            <Component3 />
        </div>
    );
}
function Component3() {
    return (
        <div className="component component3">
            <h1>INGENIERÍA DE SISTEMAS</h1>
            <Component4 />
        </div>
    );
}

function Component4() {
    return (
        <div className="component component4">
            <h1>6TO SEMESTRE</h1>
            <Component5 />
        </div>
    );
}
function Component5() {
    const user = useContext(UserContext);
    return (
        <div className="component component5">
            <h1>VOLVI</h1>
            <h2>{`SOY ${user}!`}</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
export default Component1;
