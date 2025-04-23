export default function Team(): JSX.Element {
    return (
        <div className="team-section">
            <div className="content-section">
                <h3 className="subtitle">Our Team</h3>
                <h1 className="title">Meet the Minds Shaping Blocktunix</h1>
                <p className="description">Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.</p>
            </div>

            <div className="team-list">
                <div className="team-member">
                    <div className="member-image gradient-border">
                        <div className="member-info"></div>
                    </div>
                    <div className="member-name">
                        <h2 className="name">Alexandra Tan</h2>
                        <hr className="seperator" />
                        <p className="role">Chief Executive Officer</p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image gradient-border">
                        <div className="member-info"></div>
                    </div>
                    <div className="member-name">
                        <h2 className="name">Elena Rodriguez</h2>
                        <hr className="seperator" />
                        <p className="role">Chief Technology Officer</p>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-image gradient-border">
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
    );
}