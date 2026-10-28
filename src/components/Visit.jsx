import { business } from '../data'

export default function Visit() {
  return (
    <section className="visit" id="visita">
      <div className="container visit__grid">
        <div data-reveal>
          <p className="eyebrow">Dirección</p>
          <p className="visit__big">{business.address}<br />{business.city}</p>
        </div>
        <div data-reveal style={{ '--d': 1 }}>
          <p className="eyebrow">Horario</p>
          <dl className="hours">
            {business.hours.map((slot) => (
              <div key={slot.days}><dt>{slot.days}</dt><dd>{slot.time}</dd></div>
            ))}
            <div><dt>Lunes</dt><dd>Descanso</dd></div>
          </dl>
        </div>
        <div data-reveal style={{ '--d': 2 }}>
          <p className="eyebrow">Contacto</p>
          <p className="visit__big"><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a><br />{business.instagram}</p>
        </div>
      </div>
    </section>
  )
}
