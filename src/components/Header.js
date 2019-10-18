import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  `;
  

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <Link className="link-items" to="/">
          Home
        </Link>
        <Link className="link-items" to="/characters">
          Characters
        </Link>
        <Link className="link-items" to="/locations">
          Locations
        </Link>

      </NavBar>
    </header>
  );
}


// const StyledForm = styled.div
// `margin-left: 180px;
// border: 2px solid #1e90ff`

// const StyledLink = styled(Link)
// `text-decoration: none;
// color: #1e90ff;
// margin: 12px`

// const Nav = styled.div
// `border: 6px solid #1e90ff;
// display: flex;
// justify-content: center;
// align-items: center`