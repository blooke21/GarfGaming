import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

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
        <p>We're still cooking! Stay tuned for updates.</p>
        <div className="youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fZawhZZ_D5o?si=IAQ0biGXq1mF-pER?loop=1&autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0&playlist=fZawhZZ_D5o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
