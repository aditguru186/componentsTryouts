import React, { useEffect, useState } from "react";

let Circle = ({id,radius,color }) =>{
  console.log("CirlceId : "+id+" Radius : "+radius)
  return(
    <div
          id={id}
          style={{
            width: radius,
            height:radius,
            borderRadius: "50%",
            backgroundColor: color
          }}
        />
  )
}

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
      <div style={{padding:"20px", display: "flex", "align-items": "center"}}>
        <Circle id={'circle1'} radius={circle1Radius} color={circle1Color}/>
        <Circle id={'circle2'} radius={circle2Radius} color={circle2Color}/>
      </div>
      <p>Selected Circle is : {circleSelected}</p>
      <p>Radius : {circleSelected === 'circle1' ? circle1Radius : circle2Radius}</p>
      <p>Color : {circleSelected === 'circle1' ? circle1Color : circle2Color}</p>
      <input
        type="color"
        onChange={(event) => { (circleSelected == "circle1") ?
            setCircle1Color(event.target.value) : setCircle2Color(event.target.value);
        }}
      />
      <input type="text"
      placeholder="Radius To be Entered here"
      onChange={(event)=>{
        (circleSelected === "circle1") ? setCircle1Radius(event.target.value): setCircle2Radius(event.target.value);
      }}/>

    </div>
  );
};

export default App;
