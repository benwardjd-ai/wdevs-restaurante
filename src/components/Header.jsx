import { useState } from 'react'
import { business, navLinks } from '../data'
import { useScrolled } from '../hooks/useScrolled'

export default function Header() {
  const scrolled = useScrolled(80)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__inner">
        <nav className="nav nav--left" aria-label="Principal">
          {navLinks.slice(0, 2).map((link) => <a key={link.href} href={link.href} onClick={close}>{link.label}</a>)}
        </nav>
        <a href="#inicio" className="logo" onClick={close}>{business.name}</a>
        <nav className="nav nav--right">
          {navLinks.slice(2).map((link) => <a key={link.href} href={link.href} onClick={close}>{link.label}</a>)}
          <a href="#reservar" className="nav__reserve" onClick={close}>Reservar</a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>
      <div className="mobile-menu">
        {navLinks.map((link) => <a key={link.href} href={link.href} onClick={close}>{link.label}</a>)}
        <a href="#reservar" onClick={close}>Reservar</a>
      </div>
    </header>
  )
}
