import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Inventory from "./components/Inventory";
import Orders from "./components/Orders";
import Shop from "./components/Shop";
import Main from "./layout/Main";
import { productAndCardLoader } from "./Utility/productAndCardLoader";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main />,
  //     children: [
  //       {
  //         path: '/',
  //         loader: () => fetch('products.json'),
  //         element: <Shop />
  //       },
  //       {
  //         path: 'orders',
  //         element: <Orders />
  //       },
  //       {
  //         path: 'inventory',
  //         element: <Inventory />
  //       },
  //       {
  //         path: 'about',
  //         element: <About />
  //       },
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Shop />} loader={() => productAndCardLoader()} />
      <Route path="/shop" element={<Shop />} loader={() => productAndCardLoader()} />
      <Route path="/orders" element={<Orders />} loader={() => productAndCardLoader()} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/about" element={<About />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
