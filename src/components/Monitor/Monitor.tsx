import './Monitor.css'
import Clock from "../Clock/Clock"
import Apps from "../Apps/Apps"

function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen">
          <header className="home-header">
            <h2>Exploring the intersection of code, mathematics and design.</h2>
          </header>

          <main className="home-screen">
            <Clock />
            <Apps />
          </main>

          <nav className="taskbar">
            <div className="icon">
              <i className="bi bi-house-door-fill"></i>
            </div>

            <div className="icon">
              <i className="bi bi-pencil-fill"></i>
            </div>

            <div className="icon">
              <i className="bi bi-dice-1-fill"></i>
            </div>
          </nav>
      </div>

      <div className="monitor__stand" />
    </div>
  )
}

export default Monitor;