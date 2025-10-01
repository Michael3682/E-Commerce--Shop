import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'
import { SearchProvider } from './context/SearchContext'

export default function App() {
    const router = createBrowserRouter([
        { path: '/', element: <MainPage /> },
        { path: '/cart', element: <Cart /> },
        { path: '/product/:id', element: <ProductDetails /> },
        { path: '/checkout', element: <Checkout /> }
    ])
    return (
        <CartProvider>
            <SearchProvider>
                <RouterProvider router={router} />
            </SearchProvider>
        </CartProvider>
    )
}