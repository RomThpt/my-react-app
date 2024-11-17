import propTypes from "prop-types";

const UserGreeting = (props) => {
    const welcomeMessage = (
        <h2 className="welcome-msg">Welcome back, {props.username}</h2>
    );
    const loginPrompt = <h2 className="login-prompt">Please sign up.</h2>;

    return props.isLoggedIn ? welcomeMessage : loginPrompt;
};

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};
export default UserGreeting;
