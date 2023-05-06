import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../../assets/whole.png";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { Modal } from "react-responsive-modal";
import LoginModal from "./LoginModal";
import { AuthContext } from "../Context/UserContext";
const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const { open, onOpenModal, onCloseModal, user, logOut } =
    useContext(AuthContext);
  console.log(user);
  return (
    <Navbar expand="lg" className="d-sm-block d-none">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex search-bar">
            <FaSearch className="search-icon" />
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className=" search-input "
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-2 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a
              href="#"
              onClick={() => setDropdownActive(!dropdownActive)}
              className="dropdown-toggle  nav-acount"
            >
              {user ? (
                <>
                  <img src={user.photoURL} alt="" className="profile-pic" />
                  {user.displayName}
                  {dropdownActive && (
                    <ul className="dropdown-menu show top-100">
                      <li className="dropdown-item">
                        <a href="#" className="signupbtn" onClick={logOut}>
                          Log Out
                        </a>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <>
                  Create account <span>Its free!</span>
                  {dropdownActive && (
                    <ul className="dropdown-menu show top-100">
                      <li className="dropdown-item">
                        <a href="#" className="signupbtn" onClick={onOpenModal}>
                          Log In
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="#" className="signupbtn" onClick={onOpenModal}>
                          Register
                        </a>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal open={open} onClose={onCloseModal} center>
        <LoginModal />
      </Modal>
    </Navbar>
  );
};

export default Header;
