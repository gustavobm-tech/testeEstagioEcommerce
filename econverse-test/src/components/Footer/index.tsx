import "./styles.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__logo">
          <span>eco</span>nverse
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="footer__social">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>

      <div className="footer__links">
        <div>
          <h4>Institucional</h4>
          <a href="#">Sobre Nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>

        <div>
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">Fale Conosco</a>
          <a href="#">Perguntas Frequentes</a>
        </div>

        <div>
          <h4>Termos</h4>
          <a href="#">Termos e Condições</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Troca e Devolução</a>
        </div>
      </div>
    </footer>
  );
}