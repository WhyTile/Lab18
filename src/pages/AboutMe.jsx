export default function AboutMe() {
  return (
    <div className="page">
      <h1>Про мене</h1>
      <section>
        <h2>Коротко про себе</h2>
        <p>Мене звати Єгор, мені 19 років. Я навчаюся десь. Креативно займаюсь вайбкодінгом.</p>
        <p><b>Займи:</b> Був на хакатоні, після чого захотів в мак</p>
      </section>
      <section>
        <h2>Мої проєкти</h2>
        <div className="project-grid">
          <div className="card">
            <h3>HTML + CSS</h3>
            <p>Верстка архітектурних концептів для ігрових серверів.</p>
            <a href="#">Репозиторій 1</a>
          </div>
          <div className="card">
            <h3>JavaScript</h3>
            <p>Скрипти для автоматизації відеоконтенту та AI-інструментів.</p>
            <a href="#">Репозиторій 2</a>
          </div>
          <div className="card">
            <h3>React</h3>
            <p>Цей SPA-портфоліо проєкт.</p>
            <a href="#">Репозиторій 3</a>
          </div>
        </div>
      </section>
    </div>
  );
}