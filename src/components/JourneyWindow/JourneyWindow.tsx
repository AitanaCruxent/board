type JourneyWindowProps = {
  onClose: () => void
}
    
function JourneyWindow({ onClose }: JourneyWindowProps) {
  return (
    <div className="app-window">
      <div className="app-window__header">
        <h2>Profile</h2>

        <button onClick={onClose}>
          ×
        </button>
      </div>

      <div className="app-window__content">
        <p>
          Under construction... Check back soon for updates!
        </p>
      </div>
    </div>
  )
}

export default JourneyWindow