import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#abcdef");

  return (
    <div>
      <input
        type="color"
        defaultValue="#abcdef"
        onChange={(event) => {
          setColor(event.target.value);
          document.body.style.backgroundColor = color;
        }}
      />
      <p>The current color is {color}</p>
    </div>
  );
};

export default App;
