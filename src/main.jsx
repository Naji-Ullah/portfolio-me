import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");

// The build prerenders the full document into #root; hydrate it when it's
// there so first paint needs no JS. Plain client render in dev.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
