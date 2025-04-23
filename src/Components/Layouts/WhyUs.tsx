export default function WhyUs(): JSX.Element {
    return (
        <div className="why-us-section">
            <div className="container">
                <div className="flex justify-between">
                    <div className="left-section">
                        <div className="why-us-content">
                            <h3 className="subtitle">Why Choose Us</h3>
                            <h1 className="title">Elevating Your Financial Experience</h1>
                        </div>

                        <div className="item-list flex flex-col">
                            <div className="item flex flex-col justify-between">
                                <div className="item-header flex align-center">
                                    <span className="icon-container"><img src="/images/icon1.png" alt="Icon 1" width="20px" height="20px" /></span>
                                    <h2 className="subtitle">Cutting-Edge Technology</h2>
                                </div>
                                <p className="item-description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac.</p>
                                <hr className="seperator" />
                            </div>
                            <div className="item flex flex-col justify-between">
                                <div className="item-header flex align-center">
                                    <span className="icon-container"><img src="/images/icon2.png" alt="Icon 2" width="20px" height="20px" /></span>
                                    <h2 className="subtitle">User Empowerment</h2>
                                </div>
                                <p className="item-description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac.</p>
                                <hr className="seperator" />
                            </div>
                            <div className="item flex flex-col justify-between">
                                <div className="item-header flex align-center">
                                    <span className="icon-container"><img src="/images/icon3.png" alt="Icon 3" width="20px" height="20px" /></span>
                                    <h2 className="subtitle">Transparent and Secure</h2>
                                </div>
                                <p className="item-description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac.</p>
                                <hr className="seperator" />
                            </div>
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="button-container">
                            <button className="outline-button">Learn More</button>
                        </div>
                        <div className="image-container gradient-border flex flex-center">
                            <img src="/images/phone-content.png" alt="Phone" className="content-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}