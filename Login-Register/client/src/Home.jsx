import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="header-section text-center">
        <h1 className="brand-name">VividVista</h1>
        <h2 className="brand-slogan"><b><i>Where Ideas Resonate</i></b></h2>
        <hr></hr><hr></hr>
        <h2 className="welcome-message"><b>Hey There and Welcome!!</b></h2>
      </div>

      <div className="welcome-section">
        <h2 className="welcome-message">Welcome to a World of Imagination</h2>
        <p className="description">
          Unleash your creativity, explore thought-provoking content, and join a
          community where every idea finds its echo in the symphony of knowledge.
        </p>
      </div>

      <div className="featured-section">
        <h3 className="section-title">Featured Journeys</h3>
        <p className="featured-content">
          Embark on captivating journeys through our carefully curated articles,
          where each word is a stepping stone in the grand adventure of learning.
        </p>
      </div>

      <div className="explore-section">
        <h3 className="section-title">Discover Beyond</h3>
        <p className="explore-content">
          Dive into the unknown, where curiosity knows no bounds. Explore a
          kaleidoscope of ideas and perspectives, shaping the contours of your
          intellectual horizon.
        </p>
      </div>
    </div>
  );
}

export default Home;
