"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "T-shirt", price: 20, image: "/images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: 40, image: "/images/jeans.jpg" },
  { id: 3, name: "Sneakers", price: 60, image: "/images/sneakers.jpg" },
];

export default function Shop() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        padding: 20,
        backgroundColor: "#0a0a0a",
        color: "#ededed",
        minHeight: "100vh",
      }}
    >
      <a href="https://webdevcrow.com" className="underline text-orange-500 dark:text-orange-400">Home</a>
      <h1 className="text-4xl font-bold">{'Special Tier - E-commerce Example'}</h1>
      <p className="text-lg">
        {`A demo site showcasing seamless shopping with smooth, interactive features.`}
      </p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #444",
              padding: 10,
              width: 200,
              backgroundColor: "#1a1a1a",
              borderRadius: 6,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={150}
              style={{ objectFit: "cover", borderRadius: 4 }}
            />
            <h3 style={{ marginTop: 10 }}>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "6px 12px",
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                marginTop: 8,
                width: "100%",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Cart Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map(({ product, qty }) => (
                <li
                  key={product.id}
                  style={{ marginBottom: 10, display: "flex", alignItems: "center" }}
                >
                  <span style={{ flexGrow: 1 }}>
                    {product.name} x{" "}
                    <input
                      type="number"
                      value={qty}
                      min={1}
                      onChange={(e) =>
                        updateQuantity(product.id, Number(e.target.value))
                      }
                      style={{
                        width: 50,
                        marginLeft: 8,
                        marginRight: 8,
                        backgroundColor: "#222",
                        color: "#eee",
                        border: "1px solid #555",
                        borderRadius: 4,
                      }}
                    />{" "}
                    = ${(product.price * qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    style={{
                      marginLeft: 10,
                      color: "#d9534f",
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
            </p>

            <div style={{ marginTop: 20 }}>
              <Link href="/shop/checkout">
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: 16,
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                >
                  Go to Checkout
                </button>
              </Link>

              <button
                onClick={clearCart}
                style={{
                  padding: "10px 20px",
                  fontSize: 16,
                  backgroundColor: "#d9534f",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
