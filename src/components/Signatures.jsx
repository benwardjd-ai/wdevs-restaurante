import Photo from './Photo'
import { signatures } from '../data'
import { formatPrice } from '../lib/format'

export default function Signatures() {
  return (
    <section className="signatures">
      <div className="container signatures__head">
        <div>
          <p className="eyebrow" data-reveal>Platillos insignia</p>
          <h2 data-reveal style={{ '--d': 1 }}>Lo que nos <em>trae de vuelta.</em></h2>
        </div>
        <p className="signatures__hint" data-reveal style={{ '--d': 2 }}>Desliza &rarr;</p>
      </div>
      <div className="rail" data-lenis-prevent-wheel>
        {signatures.map((dish, index) => (
          <article key={dish.name} className="dish-card" data-reveal style={{ '--d': index }}>
            <div className="dish-card__photo">
              <Photo id={dish.photo} alt={dish.name} sizes="(max-width: 700px) 80vw, 30vw" />
              <span className="dish-card__index">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="dish-card__info">
              <h3>{dish.name}</h3>
              <span>{formatPrice(dish.price)}</span>
            </div>
            <p>{dish.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
