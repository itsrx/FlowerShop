import React from 'react';
import './App.css';
import ResponsiveAppBar from "./components/appbar"
import ImageMasonry from "./components/masonry"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <body>
      <div className="bgimg-1">
        <div className="caption">
          <span className="border">WATERLOO FLOWERS</span>
        </div>
      </div>

      <h2> WHO ARE WE? </h2>
      <img src="https://www.theknot.com/tk-media/images/8d7f9239-ddb5-47e7-8c81-eb39283c8262~rs_768.h"/>
      <p> Welcome to Waterloo Flowers! A student led ecommerce website to buy the freshest flowers on
        campus. We sell a variety of small potted plants, ranging from succulents to roses. We have the
        flower for any occasion. Our flowers are compact and can be placed anywhere you like. Most of
        our flowers require minimal care, as we understand how busy student's can get. So, take an easy,
        freshen up, and brighten your day with Waterloo Flowers!
      </p>

      <div className="bgimg-4">
        <div className="caption">
          <span className="border">HISTORY</span>
        </div>
      </div>

      <p> Waterloo Flowers is brough to you buy software engineering students from Waterloo. Our idea
        arose from a school project and we realized that many students around campus do not have any plants
        in their homes. Studies show that plants can help boost positivity and can help reduce stress. Our
         goal at Waterloo Flowers is to help students improve their health by selling low maintenace flowers!
      </p>

      <div className="bgimg-4">
        <div className="caption">
          <span className="border">GALLERY</span>
        </div>
      </div>
      
      <ImageMasonry/>
        <footer>
          Waterloo Flowers ©
        </footer>
        </body>
    </div>
  )
};

export default App;
