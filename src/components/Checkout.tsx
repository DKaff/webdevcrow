"use client";

import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = {
  product: Product;
  qty: number;
};

type Props = {
  cart: CartItem[];
  clearCart: () => void;
};

export default function Checkout({ cart, clearCart }: Props) {
  const [message, setMessage] = useState("");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const handleCheckout = () => {
    setMessage("Checkout is disabled for display/demo items.");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(({ product, qty }) => (
              <li key={product.id} style={{ marginBottom: 10 }}>
                {product.name} x {qty} = $
                {(product.price * qty).toFixed(2)}
              </li>
            ))}
          </ul>

          <p>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </p>

          {/* Active Checkout button */}
          <button
            onClick={handleCheckout}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              fontSize: 16,
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            Checkout
          </button>

          <button
            onClick={clearCart}
            style={{
              marginTop: 20,
              marginLeft: 10,
              padding: "10px 20px",
              fontSize: 14,
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>

          {message && (
            <p style={{ marginTop: 15, fontStyle: "italic", color: "#d32f2f" }}>
              {message}
            </p>
          )}
        </>
      )}
    </div>
  );
}
