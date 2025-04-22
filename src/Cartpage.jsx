import React, { useState, useEffect } from "react";

const initialCart = [
  {
    id: 1,
    name: "Samsung Galaxy S8",
    price: 399.99,
    quantity: 1,
    image:
      "https://th.bing.com/th/id/OIP.zP_MkFyKlqg4OgX9Pjq1lwHaIF?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 2,
    name: "Google Pixel",
    price: 499.99,
    quantity: 1,
    image:
      "https://th.bing.com/th/id/OIP.DFRyNvBSaG6iHW_CthuARgHaJN?w=149&h=185&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 2",
    price: 699.99,
    quantity: 1,
    image:
      "https://th.bing.com/th/id/OIP.lix1a-QX8hjoga2aWiZAoQHaE8?w=206&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    name: "Samsung Galaxy S7",
    price: 599.99,
    quantity: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/01/06/19/15/samsung-1957740_1280.jpg",
  },
];

export default function CartPage({ handleItemChange }) {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    handleItemChange && handleItemChange(totalItems);
  }, [cart, handleItemChange]);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <main className="min-h-screen  bg-amber-300 p-6">
      <h1 className="text-4xl font-semibold text-center mb-10">YOUR BAG</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <section className="max-w-3xl mx-auto space-y-6">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <button
                      className="text-blue-600 text-sm mt-1"
                      onClick={() => removeItem(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center text-purple-600">
                  <button onClick={() => increaseQuantity(item.id)}>↑</button>
                  <span className="text-lg font-semibold text-black">
                    {item.quantity}
                  </span>
                  <button onClick={() => decreaseQuantity(item.id)}>↓</button>
                </div>
              </article>
            ))}
          </section>

          <div className="max-w-3xl mx-auto mt-10 border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="max-w-3xl mx-auto mt-6">
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              🗑️ Clear All Items
            </button>
          </div>
        </>
      )}
    </main>
  );
}
