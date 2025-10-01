import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Cart from './pages/Cart'

export default function App() {
    const router = createBrowserRouter([
        { path: '/', element: <MainPage /> },
        { path: '/cart', element: <Cart />}

    ])
    return (
        <RouterProvider router={router} />
    )
}