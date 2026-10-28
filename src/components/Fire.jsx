import Photo from './Photo'
import { fireFacts, photos } from '../data'
import { useParallax } from '../hooks/useParallax'

export default function Fire() {
  const parallax = useParallax(0.12)

  return (
    <section className="fire" id="fuego">
      <div className="fire__media">
        <div className="fire__parallax" ref={parallax}>
          <Photo id={photos.grill} alt="Carne asándose sobre la parrilla" />
        </div>
      </div>
      <div className="container fire__content">
        <p className="eyebrow" data-reveal>El fuego</p>
        <h2 data-reveal style={{ '--d': 1 }}>No tenemos prisa. <em>El encino tampoco.</em></h2>
        <p className="fire__text" data-reveal style={{ '--d': 2 }}>
          Encendemos el horno a las seis de la mañana. Cada corte se cocina a su ritmo, sobre brasas que dan un sabor
          que ningún gas puede imitar.
        </p>
        <ul className="facts">
          {fireFacts.map((fact, index) => (
            <li key={fact.label} data-reveal style={{ '--d': index + 2 }}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
