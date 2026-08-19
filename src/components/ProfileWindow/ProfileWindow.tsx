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
          Idea for this page: Start by writing hi, then delete and write the presentation as if I waswriting on the board. 
          Maybe it would be cool that the hi is written by me with the ipad (is it possible?) and the rest with a font that 
          looks like handwritten.
        </p>
      </div>
    </div>
  )
}

export default ProfileWindow