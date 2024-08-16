import Logo from './_components/Logo';
import Description from './_components/Description';

import OpenLink from '../components/OpenLink';
import Lessoninfo from './_components/Lessoninfo';
import Contador from './_components/Contador';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Contador/>
                <Logo />
                <Description />

                <OpenLink title="Learn React" url="https://reactjs.org" />
                <OpenLink title="Mi Proyecto React GitHub" url="https://github.com/Rodrigo312-dev/dev-frontend-react" />

                <Lessoninfo
                    unidad="1"
                    texto="Introducción a react y estructura de proyecto"
                />

                <Lessoninfo
                    unidad="2"
                    texto="Context API para la gestión del estado global en aplicaciones react"
                />
            </header>
        </>
    );
};

export default Default;