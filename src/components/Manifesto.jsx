import Photo from './Photo'
import { photos } from '../data'

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <p className="eyebrow" data-reveal>Nuestra filosofía</p>
        <p className="manifesto__text" data-reveal style={{ '--d': 1 }}>
          Cocinamos como en el rancho: con
          <span className="pill"><Photo id={photos.fire} alt="" sizes="160px" /></span>
          leña de encino, tortillas
          <span className="pill"><Photo id={photos.tortillas} alt="" sizes="160px" /></span>
          hechas al momento y el tiempo que cada receta <em>pide.</em>
        </p>
        <p className="manifesto__sign" data-reveal style={{ '--d': 2 }}>Familia Hernández · Fundadores</p>
      </div>
    </section>
  )
}
