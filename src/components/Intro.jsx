import { business } from '../data'

export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <span className="intro__mark">{business.name}</span>
    </div>
  )
}
