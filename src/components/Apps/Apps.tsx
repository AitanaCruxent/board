import "./Apps.css"

function Apps() {
    return (
        <section className="apps-section">

            <div className="app-icon">
                <button className="profile">
                    <i className="bi bi-person-circle"></i>
                </button>
                <span>Profile</span>
            </div>

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