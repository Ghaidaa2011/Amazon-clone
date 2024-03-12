import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./auth/login/Login";
function App() {
  const router = new createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page is not found</h1>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;

// <Route path="/" element={<Home />} />
//   <Route path="/register" element={<Signup />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/about" element={<About />} />
//   <Route element={<PersistLogin />}>
//     <Route element={<RequireAuth />}>
//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route exact path="users" element={<Users />} />
//         <Route path="users/:idUser" element={<UpdateUser />} />
//         <Route path="user/create" element={<CreateUser />} />

//         <Route exact path="products" element={<Products />} />
//         <Route path="products/:idProduct" element={<UpdateProduct />} />
//         <Route path="products/create" element={<CreateProduct />} />
//       </Route>
//     </Route>
//   </Route>
