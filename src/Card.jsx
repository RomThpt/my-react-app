import profilePic from "./assets/vagabond.png";

const Card = () => {
    return (
        <div className="card">
            <img
                className="card-image"
                src={profilePic}
                alt="profile picture"
            ></img>
            <h2 className="card-title">RomThpt</h2>
            <p className="card-text">CS Major</p>
        </div>
    );
};

export default Card;
