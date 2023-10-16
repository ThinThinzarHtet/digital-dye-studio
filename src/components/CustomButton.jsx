import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  console.log("snap", snap);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color:
          snap.color.startsWith("#fff") ||
          snap.color.startsWith("#f6") ||
          snap.color.startsWith("#fe") ||
          snap.color.startsWith("#fff") ||
          snap.color.startsWith("#fc")
            ? "#000000"
            : "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
