import Photo from './Photo'
import { business, gallery } from '../data'

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-head">
          <h2 data-reveal>La casa</h2>
          <a href="#inicio" className="link-line" data-reveal style={{ '--d': 1 }}>{business.instagram}</a>
        </div>
        <div className="gallery">
          {gallery.map((item, index) => (
            <figure key={item.photo} className={`gallery__item gallery__item--${index + 1}`} data-reveal style={{ '--d': index }}>
              <Photo id={item.photo} alt={item.alt} sizes="(max-width: 700px) 50vw, 33vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
