import { useEffect } from "react";

export const ChatWoot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement("script");

    const initializeChatwoot = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: process.env.REACT_APP_CHAT_WIDGET_WEBSITETOKEN,
          baseUrl: BASE_URL,
        });
      } else {
        console.error("Chatwoot SDK not loaded.");
      }
    };

    script.src = BASE_URL + "/packs/js/sdk.js";
    script.defer = true;
    script.async = true;

    script.onload = initializeChatwoot;
    script.onerror = () => {
      console.error("Error loading Chatwoot SDK.");
    };

    document.body.appendChild(script);
  }, []);

  return;
};
