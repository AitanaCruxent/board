import './Monitor.css'
import Clock from "../Clock/Clock"
import Apps from "../Apps/Apps"

function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen">
          <header className="home-header">
            <h2>Exploring the intersection of code, mathematics and design.</h2>
            <Clock />
          </header>

          <main className="home-screen">
             <Apps />
          </main>
      </div>

      <div className="monitor__stand" />
    </div>
  )
}

export default Monitor;