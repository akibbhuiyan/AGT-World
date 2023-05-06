import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Hero.css";
import { AuthContext } from "../Context/UserContext";
const Hero = () => {
  const { onOpenModal, user, logOut } = useContext(AuthContext);
  return (
    <div className="hero-section ">
      <div className="here-text">
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineers follow this</p>
      </div>
      {user ? (
        <div className="joinBtn d-sm-none d-block" onClick={logOut}>
          {user.displayName}
        </div>
      ) : (
        <div className="joinBtn d-sm-none d-block" onClick={onOpenModal}>
          Join Now
        </div>
      )}

      <div className="back-btn d-sm-none d-block">
        <AiOutlineArrowLeft />
      </div>
    </div>
  );
};

export default Hero;
