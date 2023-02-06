import React, { useRef, useState, useEffect } from "react";
import styles from "./MainHeader.module.css";
import Header from "./Header";
import SubHeader from "./SubHeader/SubHeader";
const MainHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef();
  // sticky nav bar //
  // CALL BACK FOR OBSERVER
  const intersectionCallback = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) setIsVisible(false);
    else {
      setIsVisible(true);
    }
  };

  // OBSERVER OPTIONS
  const options = {
    root: null,
    rootMargin: `200px`,
    threshold: 1.0,
  };

  // INTERSECTION OBSERVER
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      intersectionCallback,
      options
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, [headerRef.current, options]);

  // STICKY CLASS TOGGLE

  const visibleClass =
    isVisible === true ? `${styles.main} ` : `${styles.main} ${styles.sticky}`;

  return (
    <div ref={headerRef}>
      <SubHeader />
      <Header className={visibleClass} />
    </div>
  );
};

export default MainHeader;
