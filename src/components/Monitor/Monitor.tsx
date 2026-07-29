import './Monitor.css'
import Clock from "../Clock/Clock"
import Apps from "../Apps/Apps"
import ExtraApps from "../Apps/ExtraApps"

function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen">
          <header className="home-header">
            <h2>Exploring the intersection of maths, coding, teaching and design.</h2>
          </header>

          <main className="home-screen">
            <Clock />
            <Apps />

            <div className="search-container">
              <ExtraApps />
              <form
                className="search-bar"
                action="https://www.google.com/search"
                method="get"
                target="_blank"
              >
                <i className="bi bi-search"></i>

                <input
                  type="search"
                  name="q"
                  placeholder="Search Google..."
                  aria-label="Search Google"
                />
              </form>

            </div>
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