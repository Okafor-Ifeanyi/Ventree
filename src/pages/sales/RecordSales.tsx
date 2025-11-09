import { useState } from "react";
import { Edit2, Check, X } from "lucide-react";

export default function RecordSale() {
  const [goods, setGoods] = useState<
    { name: string; quantity: number; price: number }[]
  >([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = () => {
    if (!name.trim()) return;
    // Add item with default values - user will fill quantity and price in table
    const newGood = { name: name.trim(), quantity: 0, price: 0 };
    setGoods([...goods, newGood]);
    setName("");
    // Automatically enable edit mode when first item is added
    if (goods.length === 0) {
      setIsEditing(true);
    }
  };

  const handleDelete = (index: number) => {
    setGoods(goods.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index: number, value: number) => {
    const updated = [...goods];
    updated[index].quantity = value;
    setGoods(updated);
  };

  const handlePriceChange = (index: number, value: number) => {
    const updated = [...goods];
    updated[index].price = value;
    setGoods(updated);
  };

  const handleRecord = () => {
    if (goods.length === 0) {
      alert("Please add at least one item");
      return;
    }

    // Check if all items have quantity and price
    const incomplete = goods.some(
      (item) => item.quantity === 0 || item.price === 0
    );
    if (incomplete) {
      alert("Please enter quantity and price for all items");
      return;
    }

    alert("Sale Recorded Successfully!");
  };

  const total = goods.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <section className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-[var(--color-secondary)]">
          Sale 000001
        </h2>
      </div>

      {/* Input for adding goods */}
      <div className="mb-6 flex flex-col items-center">
        <div className="w-full max-w-md">
          <label className="block label text-gray-700 mb-2">Name of Good</label>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Put the name of good"
              className="grow border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button
              onClick={handleAdd}
              className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-opacity-90 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* List of Goods */}
      <main className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="h4 text-[var(--color-secondary)]">List of Goods</h3>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)}>
              <Edit2 size={18} className="text-gray-600 hover:text-gray-800" />
            </button>
          ) : (
            <button onClick={() => setIsEditing(false)}>
              <Check
                size={20}
                className="text-green-600 hover:text-green-700"
              />
            </button>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-md overflow-hidden bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 body-bold text-[var(--color-secondary)] min-w-[180px]">
                  Name
                </th>
                <th className="px-6 py-3 body-bold text-[var(--color-secondary)] min-w-[150px]">
                  Quantity
                </th>
                <th className="px-6 py-3 body-bold text-[var(--color-secondary)] min-w-[150px]">
                  Price
                </th>
                {isEditing && <th className="px-6 py-3"></th>}
              </tr>
            </thead>
            <tbody className="bg-white">
              {goods.length === 0 ? (
                <tr>
                  <td
                    colSpan={isEditing ? 4 : 3}
                    className="text-center py-8 text-gray-400 text-sm"
                  >
                    No items added yet
                  </td>
                </tr>
              ) : (
                goods.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 body text-[var(--color-black)] whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-6py-4">
                      {isEditing ? (
                        <input
                          type="number"
                          value={item.quantity || ""}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                          placeholder="0"
                          className="w-full max-w-[130px] border border-[var(--color-secondary-3)] text-[var(--color-black)] rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                          min="0"
                        />
                      ) : (
                        <span className="body-small text-gray-700">
                          {item.quantity}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {isEditing ? (
                        <input
                          type="number"
                          value={item.price || ""}
                          onChange={(e) =>
                            handlePriceChange(index, Number(e.target.value))
                          }
                          placeholder="0"
                          className="w-full max-w-[130px] border border-[var(--color-secondary-3)] text-[var(--color-black)] rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                          min="0"
                        />
                      ) : (
                        <span className="body-small text-gray-700">
                          ₦{item.price}
                        </span>
                      )}
                    </td>
                    {isEditing && (
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X
                            size={20}
                            className="border border-red-500 rounded-full p-0.5"
                          />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {goods.length === 0 ? (
            <p className="text-center py-8 text-gray-400 text-sm">
              No items added yet
            </p>
          ) : (
            goods.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-medium text-gray-800">{item.name}</span>
                  {isEditing && (
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500"
                    >
                      <X
                        size={20}
                        className="border-2 border-red-500 rounded-full p-0.5"
                      />
                    </button>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Quantity
                    </label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.quantity || ""}
                        onChange={(e) =>
                          handleQuantityChange(index, Number(e.target.value))
                        }
                        placeholder="0"
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                        min="0"
                      />
                    ) : (
                      <span className="text-sm text-gray-700">
                        {item.quantity}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Price
                    </label>
                    {isEditing ? (
                      <input
                        type="number"
                        value={item.price || ""}
                        onChange={(e) =>
                          handlePriceChange(index, Number(e.target.value))
                        }
                        placeholder="0"
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                        min="0"
                      />
                    ) : (
                      <span className="text-sm text-gray-700">
                        ₦{item.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Total */}
      <div className="flex items-center justify-between py-4 border-t border-gray-300">
        <p className="body text-[var(--color-secondary)]">TOTAL</p>
        <p className="h4 text-[var(--color-secondary)]">₦{total}</p>
      </div>

      {/* Record Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleRecord}
          className="btn btn-primary text-white px-19 rounded-md font-medium hover:bg-opacity-90 transition text-sm"
        >
          Record
        </button>
      </div>
    </section>
  );
}
