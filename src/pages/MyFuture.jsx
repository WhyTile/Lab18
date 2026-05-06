export default function MyFuture() {
  const steps = [
    "Опанувати стек React + Node.js для Fullstack розробки. AKA вайбкодінг",
    "Інтегрувати AI-рішення у власні проєкти (автоматизація контенту). AKA вайбкодінг",
    "Стати провідним розробником у сфері LegalTech або GameDev. AKA вайбкодінг",
  ];

  return (
    <div className="page">
      <h1>Мій розвиток</h1>
      <ul>
        {steps.map((step, i) => <li key={i}>{i+1}. {step}</li>)}
      </ul>
      
      <blockquote>
        <p>"Найкращий спосіб передбачити майбутнє — створити його."</p>
      </blockquote>

      <section>
        <h2>Робота мрії</h2>
        <p>Працювати над створенням складних екосистем, де перетинаються комп'ютерні науки, право та штучний інтелект.</p>
      </section>

      <section>
        <h3>Ok?</h3>
        <p>Це все лож.</p>
      </section>
    </div>
  );
}