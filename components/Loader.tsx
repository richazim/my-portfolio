"use client";
import React, {useEffect, useState} from 'react'
import { gsap } from "gsap";

const Loader = () => {
  useEffect(() => {
    gsap.fromTo(
        ".progress-ring", // Sélectionne le cercle
        { strokeDashoffset: 251 }, // Départ (100% caché)
        { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" } // Fin (0% caché)
    );
  }, []);

  return (
      <div className="h-screen w-screen flex justify-center items-center">
        <svg width="250" height="250" viewBox="0 0 100 100">
          <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#000"
              strokeWidth="12"
              fill="none"
          />
          <circle
              className="progress-ring"
              cx="50"
              cy="50"
              r="40"
              stroke="#ddd"
              strokeWidth="12"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset="251"
              strokeLinecap="round"
          />
        </svg>
      </div>
  );
};

export default Loader;