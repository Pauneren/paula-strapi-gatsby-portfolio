import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <h2 className="pauladev">PaulaDev</h2>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>

    </div>
 </nav>
}

export default Navbar
