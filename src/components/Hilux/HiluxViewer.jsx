import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "@google/model-viewer";
import "./Murphy.css";


const HiluxViewer = () => {
  return (
    <div className="row">
      <div id="card">
        <model-viewer
          id="hiluxAr"
          src="/hilux1.glb"
          ios-src="/hilux.usdz"
          // poster="/public/Hilux.png"
          alt="Hilux"
          shadow-intensity="1"
          ar
          camera-controls
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
            <h1>Toyota Hilux</h1>
            <p>
            The Toyota Hilux is a globally renowned pickup truck celebrated for its rugged durability, reliability, and versatility. Since its debut in 1968, it has evolved into a powerful vehicle capable of handling both commercial and recreational demands. Equipped with efficient engine options, including robust diesel configurations, and advanced 4WD systems, the Hilux excels in off-road adventures while offering impressive towing and payload capacities. Modern models combine toughness with comfort, featuring tech-rich interiors, touchscreen infotainment, and advanced safety systems like Adaptive Cruise Control and Lane Departure Alert. Its reputation for enduring extreme conditions makes it a favorite for outdoor enthusiasts, businesses, and even military use, solidifying its status as an icon in the pickup truck segment.
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

export default HiluxViewer;
