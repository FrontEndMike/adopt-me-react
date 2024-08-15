import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Pitbull" />
    <Pet name="Garfield" animal="Cat" breed="Maine Coon" />
    <Pet name="Tony" animal="Tiger" breed="Bengal" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
