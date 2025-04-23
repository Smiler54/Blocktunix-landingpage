export default function Services(): JSX.Element {
    return (
        <div className="services">
            <div className="container">
                <div className="content-section">
                    <h3 className="subtitle">Our Services</h3>
                    <h1 className="title">Unlock Your Financial Potential with Blocktunix Services</h1>
                    <p className="description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.</p>
                </div>

                <div className="services-list flex justify-between">
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon4.png" alt="Icon 4" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Smart Contract</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon5.png" alt="Icon 5" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Liquidity Provision</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon6.png" alt="Icon 6" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Decentralized Identity</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon7.png" alt="Icon 7" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Staking and Governance</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon8.png" alt="Icon 8" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Connect Wallets</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>
                    <div className="service-item flex flex-center">
                        <div className="service-icon flex flex-center">
                            <img src="/images/icon9.png" alt="Icon 9" width="20px" height="20px" />
                        </div>
                        <div className="service-title">
                            <h2 className="title">Security Audits</h2>
                        </div>
                        <div className="service-description">
                            <p className="description">Fermentum leo fermentum molestie vulputate augue faucibus. Dui volutpat sem facilisi et arcu risus cursus dui.</p>
                        </div>
                    </div>

                    <hr className="seperator middle-line" />
                    <hr className="seperator left-line" />
                    <hr className="seperator right-line" />
                </div>
            </div>
        </div>
    );
}