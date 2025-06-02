"use client";
import React, { useState, useEffect } from "react";
import Loader from "./loader";

// Custom hook to track when all images and videos are loaded
function useMediaLoaded(mediaSources = []) {
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (!mediaSources.length) {
      setAllLoaded(true);
      return;
    }
    let loaded = 0;
    const total = mediaSources.length;
    let cancelled = false;

    function checkDone() {
      loaded++;
      if (loaded === total && !cancelled) setAllLoaded(true);
    }

    mediaSources.forEach((src) => {
      if (src.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = src;
        video.oncanplaythrough = checkDone;
        video.onerror = checkDone;
      } else {
        const img = new window.Image();
        img.src = src;
        img.onload = checkDone;
        img.onerror = checkDone;
      }
    });
    return () => {
      cancelled = true;
    };
  }, [mediaSources]);

  return allLoaded;
}

export default function LandingPageLoader({ loadingImages, loadingMedia, children }) {
  const allLoaded = useMediaLoaded(loadingMedia);
  const [showContent, setShowContent] = useState(false);

  function handleLoaderDone() {
    setShowContent(true);
  }

  return (
    <>
      {!showContent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "var(--color-body-bg, #e7ded0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader loadingImages={loadingImages} done={allLoaded} onDone={handleLoaderDone} />
        </div>
      )}
      {showContent && children}
    </>
  );
}
