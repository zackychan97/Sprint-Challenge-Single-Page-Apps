import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  const CenteredImage = styled.div`
    text-align: center;
  `;
  return (
    <section className="welcome-page">
      <header>
        <h1>Cookin up in the Lab, like I'm Rick and Morty!</h1>
        <CenteredImage>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </CenteredImage>
      </header>
    </section>
  );
}