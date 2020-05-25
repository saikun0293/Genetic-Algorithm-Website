import React, { useState } from "react";

function InputBox(props) {
  const [data, setData] = useState({
    profit: 0,
    weight: 0
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div className="input-box">
      <input
        name="profit"
        value={data.profit}
        onChange={handleChange}
        type="number"
        placeholder="Profit"
        autoComplete="off"
      />
      <input
        name="weight"
        value={data.weight}
        onChange={handleChange}
        type="number"
        placeholder="Weight"
        autoComplete="off"
      />
      <button
        onClick={() => {
          props.onAdd(data);
          setData({ profit: 0, weight: 0 });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputBox;
