import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const addToCart = (product, quantity = 1) => {
        const newCart = [...cart]
        const itemIndex = newCart.findIndex(item => item.id === product.id)

        if (itemIndex >= 0) {
            newCart[itemIndex].quantity += quantity
        } else {
            newCart.push({ ...product, quantity: quantity })
        }

        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.id !== productId)
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
            return
        }

        const newCart = cart.map(item => 
            item.id === productId 
                ? { ...item, quantity: newQuantity }
                : item
        )

        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
    }

    const getCartTotal = () => {
        let total = 0
        for (const item of cart) {
            const price = item.price * (1 - (item.discountPercentage || 0) / 100)
            total += price * item.quantity
        }
        return total
    }

    const getCartCount = () => {
        let count = 0
        for (const item of cart) {
            count += item.quantity
        }
        return count
    }

    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cartItems: cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            getCartTotal,
            getCartCount,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}