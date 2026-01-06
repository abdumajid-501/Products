import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])
  return <RouterProvider router={router} /> 
}

export default App