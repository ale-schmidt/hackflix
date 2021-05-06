import { useEffect, useState } from "react";

function userisOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  function handleConnection() {
    setIsOnline(window.navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", handleConnection);
    window.addEventListener("offline", handleConnection);
    return () => {
      window.removeEventListener("online", handleConnection);
      window.removeEventListener("offline", handleConnection);
    };
  });
  return isOnline;
}

export default userisOnline;
