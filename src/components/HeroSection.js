import React, {useContext} from "react";
import './HeroSection.css';
import { Link } from "react-router-dom";
import Airport from '../assets/airport.png';
import Tree from '../assets/tree.gif';
import Route from '../assets/route.gif';
import Event from '../assets/event.png';
import Donation from '../assets/donation.png';
import Waves from '../assets/waves.gif';
import Parachute from '../assets/parachute.gif';
import MarketPlace from '../assets/marketplace.png';
import Aeroplane from '../assets/aeroplane.png';
import { ThemeContext } from "../ThemeContext";
import NightTree from '../assets/nightTheme/tree.gif';
import NightRoute from '../assets/nightTheme/route.gif';
import NightWaves from '../assets/nightTheme/waves.gif';
import NightParachute from '../assets/nightTheme/parachute.gif';

function HeroSection() {
  const {theme} = useContext(ThemeContext);
  const heroSectionCSS = theme === 'dark' ? 'hero-section-dark' : 'hero-section';
  const isNightTheme = theme === "dark";

  return (
    <>
   <div className={heroSectionCSS}>
     <div className="aeroplane-animation">
        <img src={Aeroplane} alt="aeroplane" className="aeroplane" />
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
          <span>Support Local Communities</span>
        </h1>
      </div>
     
      <div className="hero-section grid grid-cols-2 gap-8 justify-center items-center">
        <div className="flex flex-col items-center left shadow-lg">
          <img src={Airport} alt="airport" />
          <p className="mt-3 section-paragraph text-lg">
            Revitalize your community, Organize and manage events with location
            based event management, easy to organize charities and fundraisers and
            display your local artwork to the world!!
          </p>
        </div>
        <div className="flex flex-col items-center right">
           <img
              src={isNightTheme ? NightTree : Tree}
              alt="tree"
              height={600}
            />
        </div>
        <div className="flex flex-col items-center left">
        <img
              src={isNightTheme ? NightRoute : Route}
              alt="route"
              height={600}
            />
        </div>
        <div className="flex flex-col items-center right shadow-lg">
          <img src={Event} alt="event" />
          <h3 className="text-2xl">Events</h3>
          <p className="text-purple-300">Discover and join local events happening in your community.</p>
          <Link to="/events" className="btn-primary">Explore Events</Link>
        </div>
        <div className="flex flex-col items-center left shadow-lg">
          <img src={Donation} alt="donation" />
          <h3 className="text-2xl">Donation</h3>
          <p className="text-purple-300">Support local charities and make a difference in your community.</p>
          <Link to="/donations" className="btn-primary">Donate Now</Link>
        </div>
        <div className="flex flex-col items-center right">
        <img
              src={isNightTheme ? NightWaves : Waves}
              alt="waves"
              height={600}
            />
        </div>
        <div className="flex flex-col items-center left">
        <img
              src={isNightTheme ? NightParachute : Parachute}
              alt="parachute"
              height={600}
            />
        </div>
        <div className="flex flex-col items-center right shadow-lg">
          <img src={MarketPlace} alt="marketplace" />
          <h3 className="text-2xl">Art</h3>
          <p className="text-purple-300">Showcasing local artists and their incredible creations.</p>
          <Link to="/marketplace" className="btn-primary">Explore Art</Link>
        </div>
      </div>
      <div className="aeroplane-animation">
        <img src={Aeroplane} alt="aeroplane" className="aeroplane" />
      </div>
      </div>
    </>
  );
}

export default HeroSection;
