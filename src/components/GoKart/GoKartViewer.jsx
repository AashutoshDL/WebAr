import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import "./GoKart.css";

const GoKartViewer = () => {
  return (
    <div className="row">
      <div id="card">
        <model-viewer
          id="goCartAr"
          src="/public/NewGoCart_1.glb"
          ios-src="/public/NewGoCart_1.usdz"
          // poster="/public/GoKart.png"
          alt="Skill Museum's GoKart"
          shadow-intensity="1"
          ar
          camera-controls
          touch-action="none" // Default touch action
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
            <h1>Go Kart</h1>
            <p>
              This Go Kart has 3 modes: Safe, Race, and Sports, which vary the
              speed and battery consumption of the Go Kart. To see AR in action,
              press the AR button.
            </p>
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

export default GoKartViewer;
