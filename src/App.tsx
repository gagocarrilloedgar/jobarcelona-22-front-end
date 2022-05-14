import React from "react";
import "./App.css";
import Card from "./components/molecules/Card/Card";

import ScrollBox from "./components/organism/ScrollBox/ScrollBox";

function App() {
  return (
    <div className="App">
      <h1>JOBARCELONA '22</h1>
      <ScrollBox>
        <Card
          title="Crew 💥"
          description="Videogames for crew"
          tags={["Call of duty", "GTA V"]}
        />
        <Card
          title="Family 🥳"
          description="Ideas for family gifts"
          tags={["Smart watch", "Clothes", "Amazon gift card"]}
        />
        <Card
          title="Friends 🌞"
          description="Typical friends-gift"
          tags={["Invite for dinner", "Surprise box"]}
        />
        <Card
          title="Others "
          description="Other groups"
          tags={["Computer", "New goggles"]}
        />
      </ScrollBox>
    </div>
  );
}

export default App;
