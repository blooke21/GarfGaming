import GameZone from "./components/GameZone"
import React, { userState } from 'react'

export default function App() {
  const storedDateString = localStorage.getItem("date");
  const storedDate = storedDateString ? JSON.parse(storedDateString) : null;
  const date = new Date();
  let newDay = false;
  
  if(!storedDate || (storedDate.month !== date.getMonth() && storedDate.day !== date.getDate())){
    newDay = true;
    localStorage.setItem("date", JSON.stringify({
      "month" : date.getMonth(),
      "day" : date.getDate()
  }));
  }
  
  console.log("new day", newDay)

  return (
    <div className="app">
      <header>
        <h1>GarfGaming</h1>
        <h3>
          Building a better gaming experience for garfield lovers around the
          world
        </h3>
      </header>

      <main>
      <div>
        <GameZone />
      </div>
      </main>

      <footer></footer>
    </div>
  );
}
