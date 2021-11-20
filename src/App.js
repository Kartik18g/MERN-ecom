import AdminPage from "./components/AdminPage";
import Home from "./components/Home";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Products />
      <Product />
      <Order />
      <MyOrders />
      <AdminPage />
    </div>
  );
}

export default App;