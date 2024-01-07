import { useState } from "react";
import Bar from "./Bar";
import "./Marks.css";
const Marks = () => {
  const [marks, setMarks] = useState();

  const handleOnChange = (value) => {
    setMarks(value);
  };
  return (
    <div className="container">
      <input
        type="number"
        placeholder="enter marks"
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <Bar marks={marks} />
    </div>
  );
};
export default Marks;
