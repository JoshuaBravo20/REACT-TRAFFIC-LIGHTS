import { useState } from "react";
import "./TrafficLights.css";

const TrafficLights = () => {
  const [color, setColor] = useState({
    clicked: null,
  });

  let redState = "";
  let yellowState = "";
  let greenState = "";

  if (color.clicked === "redlight") redState = "glowy";
  if (color.clicked === "yellowlight") yellowState = "glowy";
  if (color.clicked === "greenlight") greenState = "glowy";

  return (
    <div className="container">
      <div className="boxClub"></div>
      <div className="row">
        <div className="col d-flex justify-content-center mt-5">
          <div className="box">
            <div
              className={"redlight " + redState}
              onClick={() => setColor({ clicked: "redlight" })}
            ></div>
            <div
              className={"yellowlight " + yellowState}
              onClick={() => setColor({ clicked: "yellowlight" })}
            ></div>
            <div
              className={"greenlight " + greenState}
              onClick={() => setColor({ clicked: "greenlight" })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;
