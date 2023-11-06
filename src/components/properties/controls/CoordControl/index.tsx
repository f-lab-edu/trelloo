import React from "react";
import { InputNumber } from "antd";

function CoordControl() {
  const onChange = (value: 1 | 10 | 3 | null | number) => {
    console.log("changed", value);
  };

  return (
    <div>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </div>
  );
}

export default CoordControl;
