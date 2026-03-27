import { useInventory } from "../hooks/useInventory"

const Dashboard = () => {
  const { products } = useInventory()

  const totalItems = products.length

  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  )

  const outOfStock = products.filter(p => p.quantity === 0).length

  return (
    <div className="max-w-5xl mx-auto p-6">
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded">
          <p>จำนวนสินค้า</p>
          <h2 className="text-xl">{totalItems}</h2>
        </div>

        <div className="p-4 bg-green-100 rounded">
          <p>มูลค่ารวม</p>
          <h2>{totalValue} บาท</h2>
        </div>

        <div className="p-4 bg-red-100 rounded">
          <p>สินค้าหมด</p>
          <h2>{outOfStock}</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard