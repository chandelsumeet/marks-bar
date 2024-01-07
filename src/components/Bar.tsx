import "./Bar.css";
const Bar = ({ marks }) => {
  if (marks == "" || !Number(marks)) {
    return null;
  }
  if (marks <= 0 || marks > 100) {
    return (
      <div className="error">Error: Please enter marks between 0 to 100</div>
    );
  }

  return (
    <div
      className={`${marks >= 33 ? "green " : "red "} bar`}
      style={{ width: `${marks}%` }}
    ></div>
  );
};
export default Bar;
