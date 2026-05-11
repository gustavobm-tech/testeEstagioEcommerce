import "./styles.scss";

export function NewsletterForm() {
  return (
    <section className="newsletter">
      <div className="newsletter__text">
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos
          exclusivos da Econverse.
        </p>
      </div>

      <form className="newsletter__form">
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <button type="submit">INSCREVER</button>

        <label className="newsletter__terms">
          <input type="checkbox" />
          Aceito os termos e condições
        </label>
      </form>
    </section>
  );
}
