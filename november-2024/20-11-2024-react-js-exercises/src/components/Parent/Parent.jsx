import { useState } from "react";
import Counter from "../Counter/Counter";
import FormInput from "../FormInput/FormInput";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import MouseTracker from "../MouseTracker/MouseTracker";
import DropDownSelector from "../DropDownSelector/DropDownSelector";
import HoverHighlight from "../HoverHighlight/HoverHighlight";
import KeyboardListener from "../KeyboardListener/KeyboardListener";
import ResizeTracker from "../ResizeTracker/ResizeTracker";

const Parent = () => {
  const [state, setState] = useState({
    count: 0,
    name: "",
    toggle: false,
    mouseCoordinates: {
      x: 0,
      y: 0,
    },
    dropDownChoice: "",
    mouseEnterDiv: false,
    mouseExitDiv: false,
    keyPressed: "",
    resizeTracking: "",
  });

  return (
    <div>
      <Counter state={state} setState={setState} />
      <FormInput state={state} setState={setState} />
      <ToggleSwitch state={state} setState={setState} />
      <MouseTracker state={state} setState={setState} />
      <DropDownSelector state={state} setState={setState} />
      <HoverHighlight state={state} setState={setState} />
      <KeyboardListener state={state} setState={setState} />
      <ResizeTracker state={state} setState={setState} />
    </div>
  );
};
export default Parent;
