import { useState } from "react";
import "./App.css";
import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10" />
    </div>
  );
}

export default App;
