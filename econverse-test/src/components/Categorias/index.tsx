import "./styles.scss";
import {
  FiMonitor,
  FiShoppingBag,
  FiCoffee,
  FiTool,
  FiHeart,
  FiActivity,
  FiShoppingCart,
} from "react-icons/fi";

const categories = [
  { label: "Tecnologia", icon: <FiMonitor size={28} /> },
  { label: "Supermercado", icon: <FiShoppingBag size={28} /> },
  { label: "Bebidas", icon: <FiCoffee size={28} /> },
  { label: "Ferramentas", icon: <FiTool size={28} /> },
  { label: "Saúde", icon: <FiHeart size={28} /> },
  { label: "Esportes e Fitness", icon: <FiActivity size={28} /> },
  { label: "Moda", icon: <FiShoppingCart size={28} /> },
];

export function Categories() {
  return (
    <section className="categories">
      {categories.map((item) => (
        <button key={item.label} className="category-card">
          <div className="icon">{item.icon}</div>
          <span>{item.label}</span>
        </button>
      ))}
    </section>
  );
}
