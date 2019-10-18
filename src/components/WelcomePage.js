import React from "react";
// import SearchForm from "./components/SearchForm.js";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Cookin' up in the Lab like I'm Rick and Morty!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}