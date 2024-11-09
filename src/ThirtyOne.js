import React, { useEffect, useState } from 'react';

const ThirtyOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to bottom handler
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ minHeight: '200vh', position: 'relative' }}>
      <h1>Scroll Example</h1>
      <p>Scroll down to see the scroll-to-top button appear</p>
      
      <div style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Scroll Up
          </button>
        )}
        <button
          onClick={scrollToBottom}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Scroll Down
        </button>
      </div>

      {/* Add some dummy content to enable scrolling */}
      <div style={{ padding: '20px' }}>
        {[...Array(20)].map((_, index) => (
          <p key={index}>
            This is paragraph {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ThirtyOne;
