export default function LogoClient(): JSX.Element {
    return (
        <div className="logo-client">
            <div className="container">
                <p className="description">Supported by many companies around the world</p>
                <div className="logo-list flex justify-center">
                    <div className="column flex flex-col justify-around">
                        <div>
                            <img src="/images/logo1.png" alt="Logo 1" />
                        </div>
                        <div>
                            <img src="/images/logo2.png" alt="Logo 2" />
                        </div>
                    </div>
                    <div className="column flex flex-col justify-around">
                        <div>
                            <img src="/images/logo3.png" alt="Logo 3" />
                        </div>
                        <div>
                            <img src="/images/logo4.png" alt="Logo 4" />
                        </div>
                    </div>
                    <div className="column flex flex-col justify-around">
                        <div>
                            <img src="/images/logo5.png" alt="Logo 5" />
                        </div>
                        <div>
                            <img src="/images/logo6.png" alt="Logo 6" />
                        </div>
                    </div>
                    <div className="column flex flex-col justify-around">
                        <div>
                            <img src="/images/logo7.png" alt="Logo 7" />
                        </div>
                        <div>
                            <img src="/images/logo8.png" alt="Logo 8" />
                        </div>
                    </div>

                    <hr className="seperator top-line" />
                    <hr className="seperator middle-line" />
                    <hr className="seperator bottom-line" />
                </div>
            </div>
        </div>
    );
}