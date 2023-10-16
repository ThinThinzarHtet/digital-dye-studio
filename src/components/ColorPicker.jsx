import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
        presetColors={[
          "#000000",
          "#ffffff",
          "#2ae3ff",
          "#2a2aff",
          "#ff2a2a",
          "#2aff46",
          "#510c3b",
          "#8182c9",
          "#5e880b",
          "#081378",
          "#f09e57",
          "#ef01e3",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
