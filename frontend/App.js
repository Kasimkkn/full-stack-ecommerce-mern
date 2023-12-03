import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/Route/ProtectedRoute.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./components/Products/productDetails.jsx";
import Products from "./components/Products/Product.js";
import Cart from "./pages/Cart/Cart.jsx";
import Payment from "./pages/Cart/Payment.js";
import ConfirmOrder from "./pages/Cart/ConfirmOrder.js";
import Shipping from "./pages/Cart/Shipping.js";
import OrderSuccess from "./pages/Cart/OrderSuccess.js";
import OrderDetails from "./components/Orders/myOrders.jsx";
import UserOptions from "./components/layout/Header/UserOptions.jsx";
import LoginSignUp from "./components/User/LoginSignUp.jsx";
import UpdateProfile from "./components/User/UpdateProfile.js";
import ForgotPassword from "./components/User/ForgotPassword.js";
import UpdatePassword from "./components/User/UpdatePassword.js";
import ResetPassword from "./components/User/ResetPassword.js";
import Dashboard from './components/Admin/Dashboard.js'
import ProductList from './components/Admin/ProductList.js'
import NewProduct from './components/Admin/NewProduct.js'
import UpdateProduct from './components/Admin/UpdateProduct.js'
import OrderList from './components/Admin/OrderList.js'
import ProcessOrder from './components/Admin/ProcessOrder.js'
import UsersList from './components/Admin/UsersList.js'
import UpdateUser from './components/Admin/UpdateUser.js'
import ProductReviews from './components/Admin/ProductReviews.js'
import Profile from "./components/User/Profile.js";
import BarCharts from './pages/charts/BarCharts.jsx';
import LineCharts from './pages/charts/LineCharts.jsx';
import PieCharts from './pages/charts/PieCharts.jsx';
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MyOrders from "./components/Orders/myOrders.jsx";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu",(e)=>e.preventDefault())

  return (
    <Router>
      <Elements stripe={loadStripe(stripeApiKey)}>
      <Navbar />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
      
        <Route exact path="/process/payment" element={<ProtectedRoute><Payment/></ProtectedRoute>} />
        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<ProductDetails />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/products/:keyword" element={<Products />} />

        <Route exact path="/account" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>

        <Route exact path="/me/update" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute> }/>

        <Route exact path="/password/update" element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}/>

        <Route exact path="/password/forgot" element={<ForgotPassword />} />

        <Route exact path="/password/reset/:token" element={<ResetPassword />}/>

        <Route exact path="/login" element={<LoginSignUp />} />

        
        {/* cart Routes */}
        <Route exact path="/cart" element={ <Cart /> }/>

        <Route exact path="/orders" element={<ProtectedRoute><MyOrders/></ProtectedRoute>}/>
        
        <Route exact path="/shipping" element={<ProtectedRoute><Shipping/></ProtectedRoute>} />

        <Route exact path="/success" element={<ProtectedRoute><OrderSuccess/></ProtectedRoute>} />
        
        <Route exact path="/order/confirm" element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute>} />

        <Route exact path="/order/:id" element={<ProtectedRoute><OrderDetails/></ProtectedRoute>} />

        {/* admin Routes */}
        <Route exact path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />
        
        <Route exact path="/admin/products" element={<ProtectedRoute isAdmin={true}> <ProductList/> </ProtectedRoute>}/>

        <Route exact path="/admin/product"  element={<ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute>}/>

        <Route exact path="/admin/product/:id" element={<ProtectedRoute isAdmin={true}> <UpdateProduct/></ProtectedRoute>}/>

        <Route exact path="/admin/orders" element={<ProtectedRoute isAdmin={true}><OrderList/> </ProtectedRoute>}/>

        <Route exact path="/admin/order/:id" element={<ProtectedRoute isAdmin={true}><ProcessOrder/></ProtectedRoute>}/>

        <Route exact path="/admin/users" element={<ProtectedRoute isAdmin={true}><UsersList/></ProtectedRoute>}/>

        <Route exact path="/admin/user/:id" element={<ProtectedRoute isAdmin={true}> <UpdateUser/></ProtectedRoute>}/>

        <Route exact path="/admin/reviews" element={<ProtectedRoute isAdmin={true}><ProductReviews/></ProtectedRoute>}/>

        
        <Route exact path="/admin/chart/bar" element={<ProtectedRoute isAdmin={true}><BarCharts /></ProtectedRoute>} />
        <Route exact path="/admin/chart/pie" element={<ProtectedRoute isAdmin={true}><PieCharts /></ProtectedRoute>} />
        <Route exact path="/admin/chart/line" element={<ProtectedRoute isAdmin={true}><LineCharts/></ProtectedRoute>} />

      </Routes>

      </Elements>

    </Router>
  );
}

export default App;
