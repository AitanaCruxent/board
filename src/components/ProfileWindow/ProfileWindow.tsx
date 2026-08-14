import "./ProfileWindow.css"

type ProfileWindowProps = {
  onClose: () => void
}
    
function ProfileWindow({ onClose }: ProfileWindowProps) {
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
          Hi! I'm Aitana, a developer with a background in mathematics.
        </p>
      </div>
    </div>
  )
}

export default ProfileWindow