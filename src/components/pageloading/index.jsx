import React from "react";

export const LoadingRoute = () => {
  return (
    <div class="overlay">
      <div class="overlayDoor"></div>
      <div class="overlayContent">
        <div class="loader">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  );
};
