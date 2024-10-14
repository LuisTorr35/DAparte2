import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const Blogs = () => {
    return (
        <div class={'container'}>
            <div className={"row"}>
                <div className={'col-md-2'}></div>
                <div className={'col-md-8'}>
                    <h1> Bloc de Desarrollo de Aplicaciones </h1>
                    <p className={'parrafito'}>A quien este leyendo esto, se le quiere dar la bienvenida a nuestra pagina.
                        Aquí encontrarás una amplia variedad de recursos,
                        desde tutoriales detallados y guías prácticas hasta artículos sobre las últimas
                        tendencias y tecnologías en el ámbito del desarrollo. Nuestro equipo de apasionados
                        desarrolladores ha trabajado arduamente para recopilar información valiosa que te
                        ayudará a crear aplicaciones innovadoras y eficientes.</p>
                </div>
                <div className={'col-md-2'}></div>
            </div>
        </div>
    );
};
export default Blogs;
