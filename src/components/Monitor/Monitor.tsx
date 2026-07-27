import './Monitor.css'
import Clock from "../Clock/Clock"

function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen">
        <div className="welcome-screen">
          <Clock />
          <p>Welcome!</p>
          <h2>Welcome!</h2>
          <button type="button" className="btn btn-outline-light btn-lg">Click to start!</button>
        </div>
      </div>

      <div className="monitor__stand" />
    </div>
  )
}

export default Monitor;