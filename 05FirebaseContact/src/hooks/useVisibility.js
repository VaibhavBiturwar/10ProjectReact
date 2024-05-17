import { useState } from "react";

export const useVisibility = () => {
  const [isShown, setIsShown] = useState(false);
  const onSetShow = () => setIsShown(true);
  const onSetHide = () => setIsShown(false);
  return { isShown, onSetShow, onSetHide };
};
