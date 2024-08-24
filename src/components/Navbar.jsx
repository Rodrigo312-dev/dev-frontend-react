import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/deault">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                {form.formData.username !== '' && (
                    <li className="navbar-right">
                        Bienvenido {form.formData.username}: {form.formData.email}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;