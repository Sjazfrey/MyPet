import React, { useState, useEffect } from "react";

const Delay = ({ children, waitBeforeShow = 6000 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
      setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export default Delay;
