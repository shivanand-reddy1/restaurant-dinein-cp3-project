import React, { useState, useContext } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Renamed to avoid conflict
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from '../Pages/main.jsx';// We will create this context in the next step
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <nav>
        <div className="logo">Dine District</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink // This is for scrolling on the homepage
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>

          {/* Conditional Rendering for Login/Logout Button */}
          {isAuthenticated ? (
            <button onClick={handleLogout} className="menuBtn">
              LOGOUT
            </button>
          ) : (
            <RouterLink to="/login" className="menuBtn">
              LOGIN
            </RouterLink>
          )}

        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;