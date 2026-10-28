import Photo from './Photo'
import { business, photos } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media">
        <Photo id={photos.hero} alt="Cocinero frente al fuego de leña" eager />
      </div>
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">{business.tagline}</p>
        <h1 className="hero__title">
          <span className="line"><span>Fuego lento,</span></span>
          <span className="line"><span><em>maíz vivo.</em></span></span>
        </h1>
        <div className="hero__bottom">
          <p className="hero__lead">Recetas de tres generaciones cocinadas sobre encino, en el corazón de {business.city}.</p>
          <a href="#reservar" className="btn btn--ember">Reservar mesa</a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
  )
}
