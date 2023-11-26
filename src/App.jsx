import { useState } from "react";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#ff0075").all(10));

  const changeColors = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="">
      <Form changeColors={changeColors} />
      <Colors colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
