"use client";

import React from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

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
                {product.name} x {qty} = ${(product.price * qty).toFixed(2)}
              </li>
            ))}
          </ul>

          <p>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </p>

          <button
            onClick={() => alert("Checkout is disabled.")}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              fontSize: 16,
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Checkout
          </button>

          <p
            style={{ marginTop: 10, fontStyle: "italic", color: "#666" }}
          >
            Checkout is currently disabled to prevent actual purchases for demonstration items.
          </p>
        </>
      )}

      <div style={{ marginTop: 40 }}>
        <Link href="/shop">
          <button
            style={{
              padding: "10px 20px",
              fontSize: 16,
              backgroundColor: "#555",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
}
