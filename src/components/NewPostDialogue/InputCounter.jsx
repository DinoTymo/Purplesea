import React from "react";

function InputCounter({ charCount, setPostState }) {
  const charLimit = 300;
  const remainingChars = charLimit - charCount;

  function hasLimitBeenExceeded() {
    const exceeded = remainingChars < 0;
    if (exceeded || charCount === 0) {
      setTimeout(() => {
        setPostState("disabled"); // Never change a running system (even if it's the dumbest idea I've ever had)
        // !TODO: Find a way to change this system
      }, 1);
    } else
      setTimeout(() => {
        setPostState("enabled");
      }, 1);
    return exceeded;
  }

  return (
    <div className="InputCounter ">
      <span className={hasLimitBeenExceeded() ? "text-danger" : undefined}>
        {remainingChars}
      </span>
    </div>
  );
}
export default InputCounter;
