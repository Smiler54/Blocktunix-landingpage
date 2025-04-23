export default function Testimonials(): JSX.Element {
    return (
        <div className="testimonials">
            <div className="testimonials-container">
                <div className="title-section">
                    <div className="text-content">
                        <h1 className="subtitle">Testimonials</h1>
                        <p className="title">What They Say About Blocktunix</p>
                    </div>
                    <div className="button-content">
                        <button className="outline-button">See All</button>
                    </div>
                </div>

                <div className="testimonials-content">
                    <div className="testimonial-card gradient-border">
                        <div className="card-content">
                            <div className="avatar"></div>
                            {/* <img src="/images/testimonial1.jpg" alt="" className="avatar" /> */}
                            <h2 className="content-title">“Secure and Transparent Transactions”</h2>
                            <p className="content-description">Massa malesuada aliquam fames senectus vitae ornare. Fringilla sit varius mattis ultricies sed nulla.</p>
                            <hr className="seperator" />
                            <h2 className="user-name">James Reynolds</h2>
                            <p className="user-role">Cybersecurity Consultant</p>
                        </div>
                    </div>

                    <div className="testimonial-card gradient-border">
                        <div className="card-content">
                            <div className="avatar"></div>
                            {/* <img src="/images/testimonial1.jpg" alt="" className="avatar" /> */}
                            <h2 className="content-title">“Revolutionary DeFi Platform!”</h2>
                            <p className="content-description">Massa malesuada aliquam fames senectus vitae ornare. Fringilla sit varius mattis ultricies sed nulla.</p>
                            <hr className="seperator" />
                            <h2 className="user-name">Sarah Thompson</h2>
                            <p className="user-role">Financial Analyst</p>
                        </div>
                    </div>

                    <div className="testimonial-card gradient-border">
                        <div className="card-content">
                            <div className="avatar"></div>
                            {/* <img src="/images/testimonial1.jpg" alt="" className="avatar" /> */}
                            <h2 className="content-title">“Empowering Financial Independence”</h2>
                            <p className="content-description">Massa malesuada aliquam fames senectus vitae ornare. Fringilla sit varius mattis ultricies sed nulla.</p>
                            <hr className="seperator" />
                            <h2 className="user-name">Michael Rodriguez</h2>
                            <p className="user-role">Entrepreneur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}