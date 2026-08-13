import { useState } from "react";
import "./Apps.css"

function Apps() {

    // Window popup rendering ---------------------------------------------------------------------------------------
    const [openWindow, setOpenWindow] = useState<string | null>(null);
  
    return (
        <section className="apps-section">

            <div className="app-icon">
                <button className="profile"
                onClick={() => setOpenWindow("profile")}
                >
                    <i className="bi bi-person-circle"></i>
                </button>
                <span>Profile</span>
            </div>

            {openWindow ==="profile" && (
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

            <div className="app-icon">
                <button className="journey">
                    <i className="bi bi-backpack"></i>
                </button>
                <span>Journey</span>
            </div>

            <div className="app-icon">
                <button className="tools">
                    <i className="bi bi-tools"></i>
                </button>
                <span>ToolKit</span>
            </div>

            <div className="app-icon">
                <button className="projects">
                    <i className="bi bi-journal-code"></i>
                </button>
                <span>Projects</span>
            </div>

            <div className="app-icon">
                <button className="contact">
                    <i className="bi bi-phone"></i>
                </button>
                <span>Contact</span>
            </div>


        </section>
        
    )
}

export default Apps;