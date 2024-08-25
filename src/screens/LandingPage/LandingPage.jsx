const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="header">
                <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </div>
            <div className="welcome">
                <h2>Bienvenido</h2>
                <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
            </div>
            <div className="topics">
                <h2>Temas Cubiertos</h2>
                <ul>
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de <strong>React hooks</strong> como <em>useState</em> y <em>useEffect</em></li>
                    <li>Creación de <strong>custom hooks</strong> como <em>useForm</em></li>
                    <li>Gestión de variables de estado con <em>useState</em></li>
                    <li>Gestión de estado global con <strong>Redux</strong></li>
                    <li>Integración de <strong>Redux</strong> con <strong>React</strong></li>
                    <li>Manejo de <strong>Formularios</strong> en <strong>React</strong></li>
                    <li>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></li>
                </ul>
            </div>
            <div className="resources">
                <h2>Recursos Adicionales</h2>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos: 
                    <a href="https://react.dev">Inicio con React</a>
                </p>
            </div>
            <div className="copyRight">
                <p>© 2024 Módulo 7. USIP. - Dev. Rodrigo Machaca</p>
            </div>
        </div>
    );
};
export default LandingPage;