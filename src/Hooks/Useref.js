import { useRef, useEffect } from 'react';

function UseRefExample() {
  // Create a ref for the input element
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Use the ref to access the DOM node and focus it
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h3>UseRef Example</h3>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;
