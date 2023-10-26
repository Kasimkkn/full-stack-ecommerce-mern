import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./components/Products/productDetails";
import Products from "./components/Products/Product";
import UserOptions from "./components/layout/Header/UserOptions.jsx";
import LoginSignUp from "./components/User/LoginSignUp";
import UpdateProfile from "./components/User/UpdateProfile";
import ForgotPassword from "./components/User/ForgotPassword";
import UpdatePassword from "./components/User/UpdatePassword";
import ResetPassword from "./components/User/ResetPassword";
import Dashboard from './components/Admin/Dashboard'
import Profile from "./components/User/Profile";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MyOrders from "./components/Orders/myOrders";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<ProductDetails />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/products/:keyword" element={<Products />} />

        <Route exact path="/cart" element={ <Cart /> }/>

        <Route exact path="/account" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>

        <Route exact path="/me/update" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute> }/>

        <Route exact path="/password/update" element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}/>

        <Route exact path="/password/forgot" element={<ForgotPassword />} />

        <Route exact path="/password/reset/:token" element={<ResetPassword />}/>

        <Route exact path="/login" element={<LoginSignUp />} />

        <Route exact path="/orders" element={<ProtectedRoute><MyOrders/></ProtectedRoute>}/>
        
        <Route exact path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;
