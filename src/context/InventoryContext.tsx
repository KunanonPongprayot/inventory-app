import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { Product } from "../types"

interface InventoryContextType {
  products: Product[]
  addProduct: (name: string, price: number, quantity: number) => void
  updateQuantity: (id: number, amount: number) => void
  deleteProduct: (id: number) => void
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined)

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct = (name: string, price: number, quantity: number) => {
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      quantity,
    }
    setProducts(prev => [...prev, newProduct])
  }

  const updateQuantity = (id: number, amount: number) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: Math.max(0, p.quantity + amount) } : p
      )
    )
  }

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <InventoryContext.Provider value={{ products, addProduct, updateQuantity, deleteProduct }}>
      {children}
    </InventoryContext.Provider>
  )
}

export const useInventory = () => {
  const context = useContext(InventoryContext)
  if (!context) throw new Error("useInventory must be used within InventoryProvider")
  return context
}