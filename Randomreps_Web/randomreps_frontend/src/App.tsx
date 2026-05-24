// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/UserHome";
import Category from "./pages/user/Category";
import ProductDetails from "./pages/user/ProductDetails";
import Cart from "./pages/user/Cart";
import Auth from "./pages/Auth";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import OrderManagement from "./pages/admin/OrderManagement";
import Customers from "./pages/admin/Customers";
import CouponCode from "./pages/admin/CouponCode";
import Categories from "./pages/admin/Categories";
import Transaction from "./pages/admin/Transactions";
import Brand from "./pages/admin/Brand";
import AddProduct from "./pages/admin/AddProduct";
import ProductMedia from "./pages/admin/ProductMedia";
import ProductList from "./pages/admin/ProductList";
import ProductReviews from "./pages/admin/ProductReviews";
import AdminRole from "./pages/admin/AdminRole";
import CustomerService from "./pages/admin/CustomerService.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/coupons" element={<CouponCode />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/transactions" element={<Transaction />} />
          <Route path="/admin/brands" element={<Brand />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/media" element={<ProductMedia />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/reviews" element={<ProductReviews />} />
          <Route path="/admin/roles" element={<AdminRole />} />
          <Route path="/admin/customerservice" element={<CustomerService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
