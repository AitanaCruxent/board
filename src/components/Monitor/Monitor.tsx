import { useRef, useState } from "react"
import './Monitor.css'
import Clock from "../Clock/Clock"
import Apps from "../Apps/Apps"
import ExtraApps from "../Apps/ExtraApps"

function Monitor() {

  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function handlePointerDown() {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    console.log("Canvas clicked", ctx)
  }

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

          <canvas
            ref={canvasRef}
            className={`drawing-canvas ${isDrawingMode ? "active" : ""}`}
            onPointerDown={handlePointerDown}          
          />

          <nav className="taskbar">
            <div className="icon">
              <i className="bi bi-house-door-fill"></i>
            </div>

            <div
              className="icon"
              onClick={() => setIsDrawingMode(!isDrawingMode)}
            >
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