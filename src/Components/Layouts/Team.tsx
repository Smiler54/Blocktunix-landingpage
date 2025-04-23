export default function Team(): JSX.Element {
    return (
        <div className="team-section">
            <div className="container">
                <div className="relative">
                    <div className="content-section flex flex-col">
                        <h3 className="subtitle">Our Team</h3>
                        <h1 className="title">Meet the Minds Shaping Blocktunix</h1>
                        <p className="description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.</p>
                    </div>

                    <div className="team-list flex justify-between align-start">
                        <div className="team-member flex flex-col">
                            <div className="member-image gradient-border flex flex-center">
                                <div className="member-info"></div>
                            </div>
                            <div className="member-name">
                                <h2 className="name">Alexandra Tan</h2>
                                <hr className="seperator" />
                                <p className="role">Chief Executive Officer</p>
                            </div>
                        </div>
                        <div className="team-member flex flex-col">
                            <div className="member-image gradient-border flex flex-center">
                                <div className="member-info"></div>
                            </div>
                            <div className="member-name">
                                <h2 className="name">Elena Rodriguez</h2>
                                <hr className="seperator" />
                                <p className="role">Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="team-member flex flex-col">
                            <div className="member-image gradient-border flex flex-center">
                                <div className="member-info"></div>
                            </div>
                            <div className="member-name">
                                <h2 className="name">Alexandra Tan</h2>
                                <hr className="seperator" />
                                <p className="role">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>

                    <button className="outline-button join-team-button">Join All Team</button>
                </div>
            </div>
        </div>
    );
}