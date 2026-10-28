import Photo from './Photo'
import { photos } from '../data'

export default function Mezcaleria() {
  return (
    <section className="mezcal" id="mezcaleria">
      <div className="container mezcal__grid">
        <div className="mezcal__images">
          <div className="mezcal__img mezcal__img--a" data-reveal>
            <Photo id={photos.cocktail} alt="Coctel de mezcal" sizes="(max-width: 900px) 60vw, 28vw" />
          </div>
          <div className="mezcal__img mezcal__img--b" data-reveal style={{ '--d': 2 }}>
            <Photo id={photos.negroni} alt="Coctel servido en la barra" sizes="(max-width: 900px) 50vw, 22vw" />
          </div>
        </div>
        <div className="mezcal__copy">
          <p className="eyebrow" data-reveal>Mezcalería</p>
          <h2 data-reveal style={{ '--d': 1 }}>Treinta mezcales, <em>una sola regla:</em> que sean de pueblo.</h2>
          <p data-reveal style={{ '--d': 2 }}>
            Trabajamos directo con maestros mezcaleros de Oaxaca, Guerrero y Durango. Pide una degustación de tres y
            deja que te contemos de dónde viene cada copa.
          </p>
          <a href="#reservar" className="link-line" data-reveal style={{ '--d': 3 }}>Reservar en la barra</a>
        </div>
      </div>
    </section>
  )
}
