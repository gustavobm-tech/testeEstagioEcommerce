import type { Products } from "../../types/Products";
import "./styles.scss";

interface Props {
  product: Products;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: Props) {
  return (
    <article className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.descriptionShort}</p>
      <strong>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
      <button>Comprar</button>
    </article>
  );
}
