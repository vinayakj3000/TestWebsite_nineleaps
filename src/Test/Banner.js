import React, { useState } from 'react';
import './b.css'
function Banner() {
  const [expanded, setExpanded] = useState(false);
  
  const handleExpand = () => {
    setExpanded(true);
  }
  
  return (
    <div className="banner" style={{ height: expanded ? '400px' : '100px' }}>
      <button onClick={handleExpand}>Expand Banner</button>
      {expanded && (
        <div className="modal">
          {/* Content for modal goes here */}
        </div>
      )}
    </div>
  );
}

export default Banner;
