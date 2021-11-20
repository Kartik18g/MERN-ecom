import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;