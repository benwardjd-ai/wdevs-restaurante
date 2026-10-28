import { useState } from 'react'
import Photo from './Photo'
import { business, photos } from '../data'
import { buildWhatsAppLink } from '../lib/whatsapp'

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '8', '10+']
const TIMES = ['13:30', '14:30', '15:30', '19:00', '20:00', '21:00']

export default function Reservation() {
  const [form, setForm] = useState({ name: '', people: '2', date: '', time: '20:00', occasion: '' })
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submit = (event) => {
    event.preventDefault()
    const occasion = form.occasion ? ` Ocasión: ${form.occasion}.` : ''
    const message = `Hola, quisiera reservar a nombre de ${form.name} para ${form.people} personas el ${form.date} a las ${form.time}.${occasion}`
    window.open(buildWhatsAppLink(business.whatsapp, message), '_blank', 'noopener')
  }

  return (
    <section className="reservation" id="reservar">
      <div className="reservation__media">
        <Photo id={photos.interior} alt="Interior del restaurante iluminado por la noche" sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="reservation__panel">
        <p className="eyebrow" data-reveal>Reservaciones</p>
        <h2 data-reveal style={{ '--d': 1 }}>Una mesa <em>te espera.</em></h2>
        <form className="res-form" onSubmit={submit} data-reveal style={{ '--d': 2 }}>
          <label className="field field--full">
            <span>Nombre</span>
            <input name="name" value={form.name} onChange={update} required placeholder="¿A nombre de quién?" />
          </label>
          <label className="field">
            <span>Personas</span>
            <select name="people" value={form.people} onChange={update}>
              {PARTY_SIZES.map((n) => <option key={n}>{n}</option>)}
            </select>
          </label>
          <label className="field">
            <span>Fecha</span>
            <input type="date" name="date" value={form.date} onChange={update} required />
          </label>
          <div className="field field--full">
            <span>Hora</span>
            <div className="times">
              {TIMES.map((time) => (
                <button type="button" key={time} className={`time ${form.time === time ? 'time--active' : ''}`} onClick={() => setForm({ ...form, time })}>{time}</button>
              ))}
            </div>
          </div>
          <label className="field field--full">
            <span>Ocasión especial (opcional)</span>
            <input name="occasion" value={form.occasion} onChange={update} placeholder="Cumpleaños, aniversario..." />
          </label>
          <button type="submit" className="btn btn--ember btn--block">Confirmar por WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
