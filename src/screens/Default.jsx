import Logo from './_components/Logo';
import Description from './_components/Description';

import OpenLink from '../components/OpenLink';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />

                <OpenLink title="Learn React" url="https://reactjs.org"/>
                <OpenLink title="Mi Proyecto React GitHub" url="https://github.com/Rodrigo312-dev/dev-frontend-react"/>
            </header>
        </>
    );
};

export default Default;