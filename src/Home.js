import React from "react";
import Navigation from "./Navigation";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <section className="bards">
        <div className="bard">
          <img
            src="https://www.businessleader.co.uk/wp-content/uploads/2021/12/iStock-671263770-1024x642.jpg"
            alt="Event-image"
          />
          <h1>
            <strong>Events</strong>
          </h1>
          <p>Get details about Local events happening in your community.</p>
          <p>
            <a href="/events">
              <button>Read More</button>
            </a>
          </p>
        </div>
        <div className="bard">
          <img
            src="https://elearningindustry.com/wp-content/uploads/2021/11/Nonprofit-Software-For-Fundraising-6-Strategies.jpg"
            alt="Event-image"
          />
          <h1>
            <strong>Fundraising</strong>
          </h1>
          <p>Get details about fundraising camps.</p>
          <p>
            <a href="/donations">
              <button>Read More</button>
            </a>
          </p>
        </div>
        <div className="bard">
          <img
            src="https://images.squarespace-cdn.com/content/v1/56127c3be4b00eddebda6c48/1580833607461-RQA44OW38NPIDRP7H8ZN/DIY+Art+1.jpg?format=1000w"
            alt="Event-image"
          />
          <h1>
            <strong>Art Market</strong>
          </h1>
          <p>See art work of living artists.</p>
          <p>
            <a href="/marketplace">
              <button>Read More</button>
            </a>
          </p>
        </div>
      </section>
      <div className="footer-home">
      <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
