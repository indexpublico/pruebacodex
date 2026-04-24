import './App.css'

const services = [
  'Construcción de viviendas',
  'Obras comerciales',
  'Remodelaciones y ampliaciones',
  'Proyectos llave en mano',
  'Dirección de obra',
  'Mantenimiento edilicio',
]

const projects = [
  {
    title: 'Torre Mirador Norte',
    description:
      'Desarrollo residencial de 18 pisos con amenities premium y certificación energética.',
    result: 'Entrega 30 días antes del cronograma',
  },
  {
    title: 'Centro Comercial Ágora',
    description:
      'Ejecución integral de 7.500 m² comerciales, locales modulares y estacionamiento cubierto.',
    result: 'Apertura operativa en etapa récord',
  },
  {
    title: 'Complejo Industrial Ruta 6',
    description:
      'Naves logísticas, oficinas administrativas y urbanización externa para operación continua.',
    result: 'Reducción del 18% en costos operativos del cliente',
  },
]

const processSteps = [
  {
    title: 'Diagnóstico y alcance',
    text: 'Relevamos necesidades, objetivos de inversión y plazos reales para diseñar un plan viable.',
  },
  {
    title: 'Planificación técnica y financiera',
    text: 'Definimos proyecto ejecutivo, cronograma, compras y presupuesto con hitos medibles.',
  },
  {
    title: 'Ejecución y control de obra',
    text: 'Coordinamos equipos, seguridad y calidad con reportes periódicos para una visión 360°.',
  },
  {
    title: 'Entrega y postventa',
    text: 'Finalizamos con documentación completa, garantías y soporte de mantenimiento.',
  },
]

const benefits = [
  'Un único interlocutor para todo el proyecto',
  'Transparencia en costos y certificaciones',
  'Equipos propios y red de especialistas calificados',
  'Cumplimiento estricto de plazos comprometidos',
]

const indicators = [
  { value: '+220', label: 'Proyectos finalizados' },
  { value: '97%', label: 'Clientes que vuelven a contratarnos' },
  { value: '+15', label: 'Años de experiencia en obras' },
  { value: '0', label: 'Obras sin control de seguridad' },
]

const testimonials = [
  {
    quote:
      'Con Constructora Horizonte pudimos abrir nuestro local principal a tiempo y sin sorpresas de presupuesto.',
    name: 'María Rojas',
    role: 'Directora de Expansión, Grupo Álamo',
  },
  {
    quote:
      'Nos acompañaron desde el anteproyecto hasta la entrega final de nuestra vivienda. Profesionalismo total.',
    name: 'Santiago y Lucía Méndez',
    role: 'Clientes residenciales',
  },
]

function App() {
  return (
    <div className="app">
      <header className="site-header" id="inicio">
        <a className="brand" href="#inicio">
          <span>Constructora</span>
          <strong>Horizonte</strong>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#metodologia">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <p className="eyebrow">Construimos valor, no solo metros cuadrados</p>
          <h1>Obras planificadas para entregar calidad, plazo y rentabilidad.</h1>
          <p className="hero-copy">
            En Constructora Horizonte gestionamos cada etapa de tu obra para que construyas con
            certeza técnica, financiera y operativa.
          </p>
          <a className="btn btn-primary" href="#contacto">
            Solicitar asesoramiento
          </a>
        </section>

        <section className="section split" id="problema">
          <article className="card">
            <h2>El problema</h2>
            <p>
              Construir sin planificación integral suele generar desvíos de presupuesto, retrasos
              críticos y decisiones improvisadas que impactan directamente en la calidad final.
            </p>
          </article>
          <article className="card highlight">
            <h2>Nuestra solución</h2>
            <p>
              Ejecutamos una gestión integral de obra de principio a fin: proyecto, compras,
              coordinación técnica, control de avances y entrega con garantía.
            </p>
          </article>
        </section>

        <section className="section" id="servicios">
          <h2>Servicios</h2>
          <div className="grid services-grid">
            {services.map((service) => (
              <article key={service} className="service-item">
                <h3>{service}</h3>
                <p>Equipo técnico especializado y procesos certificados para máxima eficiencia.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="proyectos">
          <h2>Proyectos realizados</h2>
          <div className="grid projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.result}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="metodologia">
          <h2>Cómo trabajamos</h2>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <article key={step.title} className="timeline-item">
                <div className="step">0{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="beneficios">
          <article>
            <h2>Beneficios para tu proyecto</h2>
            <ul className="benefits-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
          <article className="indicators" id="indicadores">
            <h2>Indicadores</h2>
            <div className="grid indicators-grid">
              {indicators.map((item) => (
                <div key={item.label} className="indicator-item">
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section" id="testimonios">
          <h2>Testimonios</h2>
          <div className="grid testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                “{testimonial.quote}”
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section contact" id="contacto">
          <h2>Solicitá tu presupuesto</h2>
          <p>
            Completá el formulario y nuestro equipo se pondrá en contacto para evaluar tu proyecto.
          </p>
          <form className="contact-form">
            <label>
              Nombre y apellido
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="nombre@empresa.com" required />
            </label>
            <label>
              Teléfono
              <input type="tel" name="phone" placeholder="+54 9 ..." required />
            </label>
            <label>
              Tipo de proyecto
              <select name="projectType" defaultValue="">
                <option value="" disabled>
                  Seleccioná una opción
                </option>
                <option>Vivienda</option>
                <option>Comercial</option>
                <option>Remodelación</option>
                <option>Llave en mano</option>
              </select>
            </label>
            <label className="full-width">
              Contanos sobre tu obra
              <textarea name="message" rows="4" placeholder="Ubicación, metros, tiempos estimados..." />
            </label>
            <button type="submit" className="btn btn-primary full-width">
              Enviar consulta
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Constructora Horizonte. Todos los derechos reservados.</p>
        <a href="#inicio">Volver arriba</a>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
