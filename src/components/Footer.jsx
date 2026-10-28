import { business } from '../data'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__mark">{business.name}</p>
      <div className="footer__meta">
        <span>&copy; {CURRENT_YEAR} {business.name}. Sitio demo · Fotografía: Unsplash.</span>
        <span>Diseño y desarrollo por <strong>W-DEVs</strong></span>
      </div>
    </footer>
  )
}
