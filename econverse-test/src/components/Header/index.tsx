import "./styles.scss";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="header-top">
        <span>Compra <strong>100% segura</strong></span>
        <span><strong>Frete grátis</strong> acima de R$ 200</span>
        <span><strong>Parcele</strong> suas compras</span>
      </div>

      {/* MAIN HEADER */}
      <div className="header-main">
        <div className="logo">
          <span className="logo-circle">e</span>
          <strong>converse</strong>
        </div>

        <div className="search">
          <input placeholder="O que você está procurando?" />
          <button>
            <FiSearch size={18} />
          </button>
        </div>

        <div className="icons">
          <FiUser size={20} />
          <FiHeart size={20} />
          <FiShoppingCart size={20} />
        </div>
      </div>

      {/* NAV */}
      <nav className="header-nav">
        <button className="all">Todas categorias</button>
        <button>Supermercado</button>
        <button>Livros</button>
        <button>Moda</button>
        <button className="highlight">Lançamentos</button>
        <button className="offer">Ofertas do dia</button>
        <button>Assinatura</button>
      </nav>
    </header>
  );
}
