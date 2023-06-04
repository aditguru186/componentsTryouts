import React, { useEffect, useState } from "react";

var App = () => {
  const [circle1Radius, setCircle1Radius] = useState(100);
  const [circle2Radius, setCircle2Radius] = useState(100);
  const [circle1Color, setCircle1Color] = useState("#aafffb");
  const [circle2Color, setCircle2Color] = useState("#aafffb");
  const [circleSelected, setCircleSelected] = useState(null);

  useEffect(() => {
    const handleClick = (event) => {
      const circleId = event.target.id;
      setCircleSelected(circleId);
    };
    document.getElementById("circle1").addEventListener("click", handleClick);
    document.getElementById("circle2").addEventListener("click", handleClick);
  }, []);
  return (
    <div>
      <input
        type="color"
        onChange={(event) => {
          if (circleSelected == "circle1") {
            setCircle1Color(event.target.value);
          } else {
            setCircle2Color(event.target.value);
          }
        }}
      />
      <div
        id="circle1"
        style={{
          width: circle1Radius,
          height: circle1Radius,
          borderRadius: "50%",
          backgroundColor: circle1Color
        }}
      />
      <div
        id="circle2"
        style={{
          width: circle2Radius,
          height: circle2Radius,
          borderRadius: "50%",
          backgroundColor: circle2Color
        }}
      />
      <p>Selected Circle is : {circleSelected}</p>
    </div>
  );
};

export default App;
