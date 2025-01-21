### **Exercise 1: CounterApp**

- **Components:** `CounterParent` and `CounterDisplay`
- **What It Needs to Do:**
  - `CounterParent` maintains a `count` state.
  - `CounterParent` passes the `count` value and a callback function to `CounterDisplay`.
  - `CounterDisplay` has a button. When clicked, it increments the `count` in `CounterParent`.
- **Event Listener:** `onClick` for button.
- **Final Flow Logic:** Parent state is updated by the child’s button click.

---

### **Exercise 2: InputForm**

- **Components:** `FormParent` and `FormInput`
- **What It Needs to Do:**
  - `FormParent` maintains an input value state.
  - `FormParent` passes the current input value and an update function to `FormInput`.
  - `FormInput` has a text input field. Typing in it updates the state in `FormParent`.
- **Event Listener:** `onChange` for input field.
- **Final Flow Logic:** Parent state is updated live as the child captures input.

---

### **Exercise 3: ToggleSwitch**

- **Components:** `SwitchParent` and `ToggleButton`
- **What It Needs to Do:**
  - `SwitchParent` manages a boolean `isOn` state.
  - `SwitchParent` passes `isOn` and a toggle function to `ToggleButton`.
  - `ToggleButton` toggles the `isOn` state when clicked, switching between "ON" and "OFF".
- **Event Listener:** `onClick` for button.
- **Final Flow Logic:** Parent state toggles when the child is clicked.

---

### **Exercise 4: MouseTracker**

- **Components:** `MouseParent` and `MouseChild`
- **What It Needs to Do:**
  - `MouseParent` tracks the mouse position with state variables `x` and `y`.
  - `MouseChild` receives a callback function from `MouseParent` to update these values.
  - When the user moves the mouse over `MouseChild`, it updates the parent's mouse position.
- **Event Listener:** `onMouseMove` for a div.
- **Final Flow Logic:** Parent state updates on mouse movement within the child.

---

### **Exercise 5: DropdownSelector**

- **Components:** `DropdownParent` and `DropdownChild`
- **What It Needs to Do:**
  - `DropdownParent` stores a selected option in state.
  - `DropdownParent` passes the options and selection handler to `DropdownChild`.
  - `DropdownChild` renders a dropdown. Selecting an option updates the parent's state.
- **Event Listener:** `onChange` for a select element.
- **Final Flow Logic:** Parent state reflects the child’s selected dropdown option.

---

### **Exercise 6: HoverHighlight**

- **Components:** `HighlightParent` and `HighlightBox`
- **What It Needs to Do:**
  - `HighlightParent` tracks whether the child is being hovered.
  - `HighlightParent` passes a hover handler function to `HighlightBox`.
  - `HighlightBox` highlights itself (CSS change) and updates the parent when hovered.
- **Event Listener:** `onMouseEnter` and `onMouseLeave` for a div.
- **Final Flow Logic:** Parent state changes on hover, and the child’s style reflects this.

---

### **Exercise 7: KeyboardListener**

- **Components:** `KeyboardParent` and `KeyChild`
- **What It Needs to Do:**
  - `KeyboardParent` tracks the last key pressed in its state.
  - `KeyboardParent` passes a handler to `KeyChild` to update the key state.
  - `KeyChild` listens for keydown events and informs the parent of the pressed key.
- **Event Listener:** `onKeyDown` for the entire document or an input.
- **Final Flow Logic:** Parent state reflects the last key pressed in the child.

---

### **Exercise 8: ResizeTracker**

- **Components:** `ResizeParent` and `ResizeBox`
- **What It Needs to Do:**
  - `ResizeParent` maintains a `size` state.
  - `ResizeBox` has a resizable container. Dragging its edges updates the parent's size.
  - Pass the update function to `ResizeBox` and render the current size.
- **Event Listener:** `onResize` or simulated by mouse events for resizing.
- **Final Flow Logic:** Parent size state updates as the child is resized.

---

### **Exercise 9: FocusTracker**

- **Components:** `FocusParent` and `InputField`
- **What It Needs to Do:**
  - `FocusParent` tracks whether the input field is focused in its state.
  - `FocusParent` passes focus and blur handlers to `InputField`.
  - `InputField` updates the parent’s state when it gains or loses focus.
- **Event Listener:** `onFocus` and `onBlur` for an input.
- **Final Flow Logic:** Parent tracks focus state based on the child’s events.

---

### **Exercise 10: DragAndDrop**

- **Components:** `DragParent` and `DraggableChild`
- **What It Needs to Do:**
  - `DragParent` tracks the current position of the draggable child in its state.
  - `DragParent` passes a position updater to `DraggableChild`.
  - `DraggableChild` updates its position by reporting to the parent as it’s dragged.
- **Event Listener:** `onDrag` and `onDrop` for a draggable div.
- **Final Flow Logic:** Parent tracks the drag position as updated by the child.
