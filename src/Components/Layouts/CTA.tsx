import { ArrowForward } from "@mui/icons-material";

export default function CTA(): JSX.Element {
    return (
        <div className="cta-section">
            <div className="cta-container">
                <div className="cta-content gradient-border">
                    <div className="left-content">
                        <h1 className="title">Empower Your Finances, Embrace Freedom!</h1>
                        <p className="description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.</p>
                    </div>
                    <div className="right-content">
                        <button className="gradient-button" style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle' }}>
                            <span style={{ fontSize: '18px' }}>Get Started</span>
                            <ArrowForward style={{ marginLeft: "8px", fontSize: '18px' }} />
                        </button>
                    </div>
                </div>
                <div className="cta-image">
                    {/* <img src="/images/" alt="CTA Background" className="background-image" /> */}
                </div>
            </div>
        </div>
    );
}