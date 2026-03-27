import { useState } from "react"
import { useInventory } from "../hooks/useInventory"

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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="ค้นหาสินค้า..."
        className="border p-2 w-full"
        onChange={e => setSearch(e.target.value)}
      />

      {/* Form */}
      <div className="flex gap-2">
        <input
          placeholder="ชื่อสินค้า"
          className="border p-2"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="ราคา"
          className="border p-2"
          onChange={e => setPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="จำนวน"
          className="border p-2"
          onChange={e => setQuantity(Number(e.target.value))}
        />

        <button
          className="bg-blue-500 text-white px-4"
          onClick={() => addProduct(name, price, quantity)}
        >
          เพิ่ม
        </button>
      </div>

      {/* List */}
      <div className="grid gap-4">
        {filtered.map(p => (
          <div
            key={p.id}
            className={`p-4 border rounded ${
              p.quantity === 0 ? "bg-red-50" : ""
            }`}
          >
            <h2 className="font-bold">{p.name}</h2>
            <p>ราคา: {p.price}</p>
            <p>จำนวน: {p.quantity}</p>

            {p.quantity === 0 && (
              <span className="text-red-500">สินค้าหมด</span>
            )}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateQuantity(p.id, 1)}
                className="bg-green-500 text-white px-2"
              >
                +
              </button>

              <button
                onClick={() => updateQuantity(p.id, -1)}
                className="bg-yellow-500 text-white px-2"
              >
                -
              </button>

              <button
                onClick={() => deleteProduct(p.id)}
                className="bg-red-500 text-white px-2"
              >
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products