import React, { useState } from "react";

export default function SearchBar() {
  const [inpVal, setInpVal] = useState("");
  const [isShowOnly, setIsShowOnly] = useState(false);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
      />
      <br />
      <input
        id="input1"
        type="checkbox"
        checked={isShowOnly}
        onChange={(e) => setIsShowOnly(e.target.checked)}
      />
      <label htmlFor="input1">{"Only show stock "}</label>
    </div>
  );
}
