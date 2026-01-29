import React, { useEffect, useState } from "react";
import { LoaderContainer } from "./Loader.styled";
import Lottie from "lottie-react";
import LogoAnimationData from "@/public/logos/logo-animation-lottie.json";

const Loader = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!LogoAnimationData || !LogoAnimationData.assets) {
      console.error("Invalid Lottie animation data");
      setHasError(true);
      setErrorMessage("Invalid animation data structure");
    }
  }, []);

  const handleAnimationError = (error) => {
    console.error("Lottie animation error:", error);
    setHasError(true);
    setErrorMessage(error?.message || "Animation failed to load");
  };

  if (hasError) {
    return (
      <LoaderContainer>
        <div>Loading...</div>
        {errorMessage && <div style={{ fontSize: "12px", color: "red", marginTop: "10px" }}>{errorMessage}</div>}
      </LoaderContainer>
    );
  }

  return (
    <LoaderContainer>
      <Lottie
        animationData={LogoAnimationData}
        loop={false}
        style={{
          width: "100vw",
          maxWidth: "1400px",
          height: "auto"
        }}
        className="loader"
        onError={handleAnimationError}
      />
    </LoaderContainer>
  );
};

export default Loader;
