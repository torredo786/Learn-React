import React, { useState } from 'react'

export default function Five() {

    const [isToggled,setIsToggles] = useState(false);

    const handleToggle = () => {
        setIsToggles(!isToggled);
    }

  return (
    <div>
      <label>
        <input type='checkbox' checked={isToggled} onChange={handleToggle} disabled={false}/>
      </label>
      <p>{isToggled ?" On ":" Off"}</p>
    </div>
  )
}
