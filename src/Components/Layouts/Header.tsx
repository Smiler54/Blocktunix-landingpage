export default function Header(): JSX.Element {
    return (
        <div className="header">
            <h1>Blocktunix</h1>
            <ul className="nav">
                <li className="nav-item active">Home</li>
                <li className="nav-item">About Us</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Page</li>
                <li className="nav-item">Contact Us</li>
            </ul>
            <button className="gradient-button">
                Get Started
            </button>
        </div>
    );
}