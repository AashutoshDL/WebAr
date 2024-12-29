import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import "./room.css";


const Room = () => {
  return (
    <div className="row">
      <div id="card">
        <model-viewer
          id="smarcAr"
          src='/Room_1.glb'
          ios-src="/Room.usdz"
          // poster="/public/Hilux.png"
          alt="Smarc"
          shadow-intensity="1"
          ar
          camera-controls
          camera-orbit="0deg 90deg auto"
          touch-action="none"
          disable-tap
          autoplay
          position="0 0 0"
          ar-scale="fixed"
          scale="0.001 0.001 0.001"
          ar-modes="webxr scene-viewer"
          ar-placement="floor"
          interaction-prompt="none">
        </model-viewer>
        <section className="attribution">
          <span>
            <h1>SMaRC</h1>
          </span>
        </section>
        <Link to='/'>
          <button>
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Room;
