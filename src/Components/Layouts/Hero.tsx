import { ArrowForward } from "@mui/icons-material";

export default function Hero(): JSX.Element {
    return (
        <div className="hero-section">
            <div className="image-section"></div>

            <div className="hero-content">
                <h3 className="subtitle">Decentralized Finance</h3>
                <h1 className="title">Unleash the Power of Decentralized Finance with Blocktunix</h1>
                <p className="description">Dignissim diam orci condimentum et. Non in nunc aenean massa amet enim sed sit. Id quam mattis mus malesuada sit. Volutpat sociis tempor quis mauris id. Hac mattis dui magna.</p>
            </div>

            <div className="button-group">
                <button className="gradient-button" style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle' }}>
                    <span style={{ fontSize: '18px' }}>Get Started</span>
                    <ArrowForward style={{ marginLeft: "8px", fontSize: '18px' }} />
                </button>
                <button className="outline-button">
                    Learn More
                </button>
            </div>

            <div className="fun-fact-section">
                <hr style={{ border: 'none', width: '100%', height: '1px', background: 'linear-gradient(to right, #2F466A1A, #2F466A, #2F466A1A)' }} />

                <div className="fun-fact">
                    <div className="fun-item">
                        <h1>100M</h1>
                        <p>App downloads</p>
                    </div>
                    <div className="fun-item">
                        <h1>4.75+</h1>
                        <p>Average review</p>
                    </div>
                    <div className="fun-item">
                        <h1>20M</h1>
                        <p>Active users</p>
                    </div>
                    <div className="fun-item">
                        <h1>40+</h1>
                        <p>Finance integrations</p>
                    </div>
                </div>
                
                <hr style={{ border: 'none', width: '100%', height: '1px', background: 'linear-gradient(to right, #2F466A1A, #2F466A, #2F466A1A)' }} />
            </div>
        </div>
    );
}