import React, { useState } from "react";
const MobileHeaderContext = React.createContext({
  onToggle: false,
  onToggleHandler: () => {},
});
export const MobileHeaderContextProvider = (props) => {
  const [onToggle, setOnToggle] = useState(false);
  const onToggleHandler = () => {
    setOnToggle((prev) => !prev);
  };
  return (
    <MobileHeaderContext.Provider
      value={{
        onToggle: onToggle,
        onToggleHandler: onToggleHandler,
      }}
    >
      {props.children}
    </MobileHeaderContext.Provider>
  );
};
export default MobileHeaderContext;
