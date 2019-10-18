import React from "react";
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';
import styled from 'styled-components';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      {/* am I supposed to use nave? */}
      <Nav>
        {/* for links at top of page */}
        <StyledLink to='/'>Welcome Page</StyledLink>
        <StyledLink to='/characters'>Characters</StyledLink>
        <StyledLink to='/locations'>Locations</StyledLink>
        {/* for searches */}
        <StyledForm>
          <SearchForm />
        </StyledForm>
      </Nav>
    </header>
  );
}

const StyledForm = styled.div
`margin-left: 180px;
border: 2px solid #1e90ff`

const StyledLink = styled(Link)
`text-decoration: none;
color: #1e90ff;
margin: 12px`

const Nav = styled.div
`border: 6px solid #1e90ff;
display: flex;
justify-content: center;
align-items: center`