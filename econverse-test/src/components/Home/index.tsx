import { Categories } from "../Categorias";
import { Footer } from "../Footer";
import { NewsletterForm } from "../Form";
import { Header } from "../Header";
import ProductList from "../Lists";
import "./styles.scss";

export default function Home() {
  return (
    <main className="home">
        <Header/>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Venha conhecer nossas promoções</h1>
          <p>50% Off nos produtos</p>
          <button>Ver produto</button>
        </div>
      </section>

      <Categories />

      {/* PRODUTOS */}
      <section className="products-section">
        <div className="section-title">
            <h2>Produtos relacionados</h2>
        </div>
        <section className="actions-relacionados">
  <button className="active">Celular</button>
  <button>Acessórios</button>
  <button>Tablets</button>
  <button>Notebooks</button>
  <button>TVs</button>
  <button>Ver todos</button>
</section>
        <ProductList />
      </section>

      {/* BANNER */}
      <section className="banner">
        <div>
          <h3>Parceiros</h3>
          <button>Confira</button>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="products-section">
       <div className="section-title">
            <h2>Produtos relacionados</h2>
        </div>
        <ProductList />
      </section>

      {/* MARCAS */}
      <section className="brands">
        <h2>Navegue por marcas</h2>

        <div className="brands-list">
          <span>Converse</span>
          <span>Apple</span>
          <span>Samsung</span>
          <span>Xiaomi</span>
          <span>LG</span>
        </div>
      </section>

      {/* FINAL */}
      <section className="products-section">
        <div className="section-title">
            <h2>Produtos relacionados</h2>
        </div>
        <ProductList />
      </section>
      <NewsletterForm />
      <Footer />
    </main>
  );
}
