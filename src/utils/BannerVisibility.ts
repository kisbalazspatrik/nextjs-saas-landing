import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useBannerVisibility = (
  storageKey: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setShowBanner(true);
    }
  }, [storageKey]);

  return [showBanner, setShowBanner];
};

export default useBannerVisibility;
