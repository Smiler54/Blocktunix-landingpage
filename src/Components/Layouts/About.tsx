import { ArrowUpward } from "@mui/icons-material";

export default function About(): JSX.Element {
    return (
        <div className="about-section">
            <div className="container">
                <div className="flex justify-between">
                    <div className="left-content">
                        <div className="about-image flex flex-center">
                            <img src="/images/phone.png" alt="About Us" width='444px' height='auto' />
                            <img src="/images/phone-content.png" alt="About Us" width='385px' height='auto' />
                        </div>
                    </div>

                    <div className="right-content">
                        <div className="about-content flex flex-col">
                            <h3 className="subtitle">About Us</h3>
                            <h1 className="title">Shaping the Future of Finance Together</h1>
                            <p className="description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.</p>
                        </div>

                        <ul className="icon-list flex flex-col">
                            <li className="icon-item flex justify-between align-center">
                                <p className="heading">Vision and Mission of Blocktunix</p>
                                <ArrowUpward style={{ width: '32px', height: '32px', backgroundColor: '#FFFFFF12', borderRadius: '20px', padding: '6px', transform: 'rotate(45deg)' }} />
                            </li>

                            <hr style={{ border: 'none', width: '100%', height: '1px', background: 'linear-gradient(to right, #2F466A1A, #2F466A, #2F466A1A)', margin: '28px 0' }} />

                            <li className="icon-item flex justify-between align-center">
                                <p className="heading">Blocktunix’s Advantages</p>
                                <ArrowUpward style={{ width: '32px', height: '32px', backgroundColor: '#FFFFFF12', borderRadius: '20px', padding: '6px', transform: 'rotate(45deg)' }} />
                            </li>

                            <hr style={{ border: 'none', width: '100%', height: '1px', background: 'linear-gradient(to right, #2F466A1A, #2F466A, #2F466A1A)', margin: '28px 0' }} />

                            <li className="icon-item flex justify-between align-center">
                                <p className="heading">Blocktunix DeFi Expert Team</p>
                                <ArrowUpward style={{ width: '32px', height: '32px', backgroundColor: '#FFFFFF12', borderRadius: '20px', padding: '6px', transform: 'rotate(45deg)' }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}