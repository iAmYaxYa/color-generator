import Color from "./Color";
import { nanoid } from "nanoid";
const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {colors?.map((color, index) => {
        return <Color key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
};

export default Colors;
