import type { Products } from "../../types/Products";
import "./styles.scss";

interface Props {
  product: Products;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>

        <img src={product.photo} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>

        <strong>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>

        <button className="buy">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
