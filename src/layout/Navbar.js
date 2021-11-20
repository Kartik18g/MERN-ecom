const Navbar = () => {
    return (
        <div>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/signup">Signup</a>
                </li>

                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/order">Order</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;