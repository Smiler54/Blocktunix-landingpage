import { FacebookRounded, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer(): JSX.Element {
    return (
        <div className="footer gradient-border flex flex-col">
            <div className="container">
                <div className="subscribe-section flex justify-between align-center">
                    <div className="subscribe-content flex flex-col">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices. Aenean sed elit mattis sagittis id velit sed scelerisque.</p>
                    </div>

                    <div className="subscribe-form flex justify-between align-center">
                        <input type="email" placeholder="Enter your email ..." />
                        <button className="outline-button">Subscribe</button>
                    </div>
                </div>

                <hr className="seperator" />

                <div className="footer-section flex justify-between align-start">
                    <div className="footer-content flex flex-col">
                        <h2>Blocktunix</h2>
                        <p>Euismod libero faucibus egestas elementum scelerisque porta commodo purus nam. Ante ac egestas duis.</p>
                        <div className="links flex">
                            <a href="www:/facebook.com">
                                <FacebookRounded />
                            </a>
                            <a href="www:/twitter.com">
                                <Twitter />
                            </a>
                            <a href="www:/linkedin.com">
                                <LinkedIn />
                            </a>
                            <a href="www:/instagram.com">
                                <Instagram />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links flex justify-between">
                        <div className="footer-link">
                            <h3>Company</h3>
                            <ul className="flex flex-col">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="footer-link">
                            <h3>Resources</h3>
                            <ul className="flex flex-col">
                                <li>Community</li>
                                <li>Video Tutorials</li>
                                <li>API Documentation</li>
                                <li>Security Reports</li>
                            </ul>
                        </div>
                        <div className="footer-link">
                            <h3>Help</h3>
                            <ul className="flex flex-col">
                                <li>Customer Support</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="seperator" />

                <div className="footer-bottom flex justify-between align-center">
                    <p>Copyright © 2023 Redentu</p>
                    <p>Designed By Redentu</p>
                </div>
            </div>
        </div>
    );
}