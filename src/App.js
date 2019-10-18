import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path ='/' component={WelcomePage}/>
      <Body>
        <Route path = '/characters' component={CharacterList} />
      </Body>
      <Route path ='/locations' component={LocationsList} />
    </main>
  );
}
