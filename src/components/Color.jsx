import { toast } from "react-toastify";

const Color = ({ color, index }) => {
  const { hex, weight } = color;

  const copyColor = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copied Color to  clipboard", error);
      }
    } else {
      toast.error("Clipboard access not available!");
    }
  };
  return (
    <div
      onClick={() => copyColor()}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};

export default Color;
