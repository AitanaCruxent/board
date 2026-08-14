import { useEffect, useRef, useState } from "react"
import './Monitor.css'
import Clock from "../Clock/Clock"
import Apps from "../Apps/Apps"
import ExtraApps from "../Apps/ExtraApps"

function Monitor() {

  // Board interactive drawing tool--------------------------------------------------------------------
  const [activeTool, setActiveTool] = useState<"pencil" | "eraser" | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Aligning the canvas size with the monitor screen size
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width
    canvas.height = rect.height
  }, [])

  // Handling pointer events for when clicking the pointer
  function handlePointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)

    setIsDrawing(true)
  }

  // Handling pointer events for when moving the pointer and drawing on the canvas
  function handlePointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing) return

    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    if (activeTool === "eraser") {
      ctx.globalCompositeOperation = "destination-out"
      ctx.lineWidth = 25
    } else {
      ctx.globalCompositeOperation = "source-over"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 3
    }

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  // Handling pointer events for when releasing the pointer  
  function handlePointerUp() {
    setIsDrawing(false)
  }

  // Function to clear the canvas and reset the drawing state
  function handleRestart() {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    setActiveTool("pencil")
    setIsDrawing(false)
  }

  function handleExit(){
    setActiveTool(null)
  }
  
  // Window popup rendering ---------------------------------------------------------------------------------------
    const [openWindow, setOpenWindow] = useState<string | null>(null);
  
  return (
    <div className="monitor">
      <div className="monitor__screen">
          <header className="home-header">
            <h2>Exploring the intersection of maths, coding, teaching and design.</h2>
          </header>

          <main className="home-screen">
            <Clock />
            <Apps setOpenWindow={setOpenWindow} />

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

          // Window popup rendering ---------------------------------------------------------------------------------------
          {openWindow === "profile" && (
            <div className="app-window">
              <div className="app-window__header">
                <h2>Profile</h2>

                <button onClick={() => setOpenWindow(null)}>
                  ×
                </button>
              </div>

              <div className="app-window__content">
                <p>
                  Hi! I'm Aitana, a developer with a background in mathematics.
                </p>
              </div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className={`drawing-canvas ${activeTool ? "active" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove} 
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}         
          />

          <nav className="taskbar">
            <div
              className="icon"
              onClick={() => setActiveTool(activeTool === "pencil" ? null : "pencil")}
            >
              <i className="bi bi-pencil-fill"></i>
            </div>

            <div className="icon"
              onClick={() => setActiveTool(activeTool === "eraser" ? null : "eraser")}
            >
              <i className="bi bi-eraser-fill"></i>
            </div>

            <div className="icon"
              onClick={handleRestart}
            >
              <i className="bi bi-arrow-clockwise"></i>
            </div>

            <div className="icon"
              onClick={handleExit}
            >
              <i className="bi bi-x-circle-fill"></i>
            </div>
          </nav>
      </div>

      <div className="monitor__stand" />
    </div>
  )
}

export default Monitor;