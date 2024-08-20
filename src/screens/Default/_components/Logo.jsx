import logo from '../../../logo.svg';

import { useSelector } from "react-redux";

const Logo = () => {
    const defaultState = useSelector(state => state.default);
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h5>{defaultState.name}</h5>
        </div>
    );
};

export default Logo;