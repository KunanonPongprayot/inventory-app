import { useInventory } from "../context/InventoryContext"

const Dashboard = () => {
  const { products } = useInventory()

  const totalItems = products.length

  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  )

  const outOfStock = products.filter(p => p.quantity === 0).length

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-xl p-4">
          <p>จำนวนสินค้า</p>
          <h2 className="text-xl">{totalItems}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p>มูลค่ารวม</p>
          <h2>{totalValue} บาท</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p>สินค้าหมด</p>
          <h2 className="text-red-500">{outOfStock}</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard