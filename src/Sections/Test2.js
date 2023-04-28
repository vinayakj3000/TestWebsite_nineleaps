import { useState } from "react";
import Shape from "./Shapes";
import { section3Constants } from "../Constants/Constants";

export default function Test2() {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <div className="Section3main">
        <h1 className="Section3Header">
          {section3Constants.headerp1}{" "}
          <span style={{ color: "#2B58A4" }}>{section3Constants.headerp2}</span>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <Shape
            id={1}
            selected={selected === 1}
            onClick={handleSelect}
            onClose={handleClose}
          />
          <Shape
            id={2}
            selected={selected === 2}
            onClick={handleSelect}
            onClose={handleClose}
          />
          <Shape
            id={3}
            selected={selected === 3}
            onClick={handleSelect}
            onClose={handleClose}
          />

          <Shape
            id={4}
            selected={selected === 4}
            onClick={handleSelect}
            onClose={handleClose}
          />
          <Shape
            id={5}
            selected={selected === 5}
            onClick={handleSelect}
            onClose={handleClose}
          />
          <Shape
            id={6}
            selected={selected === 6}
            onClick={handleSelect}
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
