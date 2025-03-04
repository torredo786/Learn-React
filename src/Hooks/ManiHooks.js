import React from 'react';
import useFormInput from './customHooks';

function MainHooks() {
  const nameInput = useFormInput(''); // Custom hook for 'name' input
  const emailInput = useFormInput(''); // Custom hook for 'email' input
  console.log(nameInput,emailInput)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...nameInput} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...emailInput} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MainHooks;
