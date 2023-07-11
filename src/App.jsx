/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import Navber from "./cpmponent/Navber/Navber";
import Price from "./cpmponent/Price/Price";

function App() {
  return (
    <>
      <div>
        <Navber></Navber>
        <div className="center">
          <h1 className="text-7xl text-purple-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            quas.
          </h1>

          <Price></Price>
        </div>
      </div>
    </>
  );
}

export default App;
