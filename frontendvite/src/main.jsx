// Import necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./index.css"; // Import global CSS styles

// Extend Chakra UI theme to modify global styles
const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
});

// Create Emotion cache
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

// Get the root container
const container = document.getElementById("root");
// Create React root
const root = ReactDOM.createRoot(container);

// Render the app inside a BrowserRouter, with ChakraProvider and CacheProvider
root.render(
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </CacheProvider>
);

// Measure performance in the app
reportWebVitals();
