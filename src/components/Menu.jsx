import { useState } from 'react'
import { menuCategories, menuItems } from '../data'
import { formatPrice } from '../lib/format'

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0])
  const items = menuItems.filter((item) => item.category === active)

  return (
    <section className="menu-section" id="carta">
      <div className="container menu">
        <div className="menu__head">
          <p className="eyebrow" data-reveal>La carta</p>
          <h2 data-reveal style={{ '--d': 1 }}>Hecho al momento.</h2>
          <div className="menu__tabs" role="tablist" data-reveal style={{ '--d': 2 }}>
            {menuCategories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={category === active}
                className={`menu__tab ${category === active ? 'menu__tab--active' : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ul className="menu__list" key={active}>
          {items.map((item, index) => (
            <li key={item.name} className="menu__item" style={{ '--i': index }}>
              <div className="menu__row">
                <h3>{item.name}</h3>
                <span className="menu__leader" aria-hidden="true" />
                <span className="menu__price">{formatPrice(item.price)}</span>
              </div>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="menu__note">Precios en pesos mexicanos, IVA incluido. Pregunta por opciones vegetarianas.</p>
      </div>
    </section>
  )
}
