import React, { useState, useEffect, useRef } from "react";

const DelayedComponent = ({ children, state }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current; // Store ref.current in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200); // Delayed display after 200ms
          if (element) observer.unobserve(element); // Use the stored element
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // Adjust this threshold as needed
      }
    );

    if (element) {
      observer.observe(element); // Use the stored element
    }

    // Cleanup observer, ensure we're unobserving the same element
    return () => {
      if (element) {
        observer.unobserve(element); // Use the stored element
      }
    };
  }, []); // Empty dependency array to run effect only on mount/unmount

  return (
    <div ref={ref} className={`h-fit ${isVisible ? state : "opacity-0"}`}>
      {children}
    </div>
  );
};

export default DelayedComponent;
