import { Route, Routes } from 'react-router-dom';

import UserLayout from './Components/Layouts/UserLayout/UserLayout';
import AdminLayout from './Components/Layouts/AdminLayout/AdminLayout';
import About from './Components/Pages/UserPages/About/About';
import Home from './Components/Pages/UserPages/Home/Home';

import AdminHome from './Components/Pages/AdminPages/Home/AdminHome';
import ListProduct from './Components/Pages/AdminPages/Product/ListProduct';
import AddProduct from './Components/Pages/AdminPages/Product/AddProduct';
import EditProduct from './Components/Pages/AdminPages/Product/EditProduct';


function App() {
  return (
    <Routes>
      <Route path='/' element={<UserLayout page={<Home />} />} />

      <Route path='/about' element={<UserLayout page={<About />} />} />

      <Route path='/admin' element={<AdminLayout child={<AdminHome />} />} />

      <Route path='/admin/product' element={<AdminLayout child={<ListProduct />} />} />
      <Route path='/admin/product/create' element={<AdminLayout child={<AddProduct />} />} />
      <Route path='/admin/product/edit/:id' element={<AdminLayout child={<EditProduct />} />} />
    </Routes>
  );
}

export default App;
