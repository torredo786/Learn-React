import { useState } from 'react';

// Custom hook for managing form input
function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  // Handler for updating the state
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Return the value and the handler, optionally packaged as an object
  return {
    value,
    onChange: handleChange,
  };
}

export default useFormInput;
