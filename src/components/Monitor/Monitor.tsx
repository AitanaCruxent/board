import './Monitor.css'

function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen">
        <div className="welcome-screen">
          <p>Welcome, Aitana</p>
          <h1>Enter the board</h1>
          <button>Open workspace</button>
        </div>
      </div>

      <div className="monitor__stand" />
    </div>
  )
}

export default Monitor;