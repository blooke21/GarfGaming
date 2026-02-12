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

  // prevent gaming on mondays
  if (date.getDay() === 1) {
    return (
      <div className="app">
        <div className="monday-message">
          <img 
            src="https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/468748758_10161216971540847_8617753216210066912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=BBhXy3XooMwQ7kNvwEdMJQG&_nc_oc=Adnc6-1UfAAywmvYwfiw0KvQtQKYP957ZgPMdVzHGjUxOgRwxIxBhQsS_AaUu8vEHjwLo_mbx_bkmn9ZLk2cVrNl&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=rFCan-biWp8xmwh-m_OInw&oh=00_AfttLOUKtBxxh-eHBmxzyCGedMZ-w7PQGr9QcVCiOzSOYQ&oe=69935093" 
            alt="Monday message" 
          />
        </div>
      </div>
    );
  } else {
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
}
