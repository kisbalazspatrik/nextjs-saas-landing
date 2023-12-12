import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useCookieVisibility = (
  storageKey: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setShowCookie(true);
    }
  }, [storageKey]);

  return [showCookie, setShowCookie];
};

export default useCookieVisibility;
