import "./Apps.css"

import type { WindowType } from "../../types/WindowType"

type AppsProps = {
  setOpenWindow: React.Dispatch<React.SetStateAction<WindowType>>
}

function Apps({ setOpenWindow }: AppsProps) {

    return (
        <section className="apps-section">

            <div className="app-icon">
                <button className="main-button"
                onClick={() => setOpenWindow("profile")}
                >
                    <i className="bi bi-person-circle"></i>
                </button>
                <span>Profile</span>
            </div>

            <div className="app-icon">
                <button className="main-button"
                onClick={() => setOpenWindow("journey")}
                >
                    <i className="bi bi-backpack"></i>
                </button>
                <span>Journey</span>
            </div>

            <div className="app-icon">
                <button className="main-button"
                    onClick={() => setOpenWindow("toolkit")}
                >
                    <i className="bi bi-tools"></i>
                </button>
                <span>ToolKit</span>
            </div>

            <div className="app-icon">
                <button className="main-button"
                    onClick={() => setOpenWindow("projects")}
                >
                    <i className="bi bi-journal-code"></i>
                </button>
                <span>Projects</span>
            </div>

            <div className="app-icon">
                <button className="main-button"
                    onClick={() => setOpenWindow("contact")}
                >
                    <i className="bi bi-phone"></i>
                </button>
                <span>Contact</span>
            </div>


        </section>
        
    )
}

export default Apps;