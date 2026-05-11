import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Products } from "../../types/Products";
import ProductCard from "../Cards";
import ProductModal from "../Modal";
import "./styles.scss";

export default function ProductList() {
  const [products, setProducts] = useState<Products[]>([]);
  const [selected, setSelected] = useState<Products | null>(null);


  useEffect(() => {
  async function load() {
    try {
      const data = await getProducts();
      console.log("PRODUTOS:", data);
      setProducts(data);
    } catch (error) {
      console.error("ERRO AO BUSCAR PRODUTOS:", error);
    }
  }

  load();
}, []);
  

  return (
    <>
      <section className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => setSelected(product)}
          />
        ))}
      </section>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
