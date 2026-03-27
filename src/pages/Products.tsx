import { useState } from "react"
import { useInventory } from "../context/InventoryContext"

const Products = () => {
  const { products, addProduct, updateQuantity, deleteProduct } = useInventory()

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [search, setSearch] = useState("")

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>

      <input
        placeholder="ค้นหา..."
        className="border p-2 w-full"
        onChange={e => setSearch(e.target.value)}
      />

      <div className="flex gap-2">
        <input placeholder="ชื่อ" className="border p-2" onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="ราคา" className="border p-2" onChange={e => setPrice(Number(e.target.value))} />
        <input type="number" placeholder="จำนวน" className="border p-2" onChange={e => setQuantity(Number(e.target.value))} />

        <button
          className="bg-blue-500 text-white px-4"
          onClick={() => addProduct(name, price, quantity)}
        >
          เพิ่ม
        </button>
      </div>

      <div className="grid gap-4">
        {filtered.map(p => (
          <div
            key={p.id}
            className={`p-4 rounded-xl shadow ${
              p.quantity === 0 ? "bg-red-50" : "bg-white"
            }`}
          >
            <h2 className="font-bold">{p.name}</h2>
            <p>ราคา: {p.price}</p>
            <p>จำนวน: {p.quantity}</p>

            <div className="flex gap-2 mt-2">
              <button onClick={() => updateQuantity(p.id, 1)} className="bg-green-500 text-white px-2">+</button>
              <button onClick={() => updateQuantity(p.id, -1)} className="bg-yellow-500 text-white px-2">-</button>
              <button onClick={() => deleteProduct(p.id)} className="bg-red-500 text-white px-2">ลบ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products