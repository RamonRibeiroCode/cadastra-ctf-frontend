import { useEffect, useState } from "react";

export const useCountDown = (targetDateString: string) => {
  const targetDate = new Date(targetDateString);

  const timeDifferenceInMiliseconds = Math.abs(
    Number(targetDate) - Number(new Date())
  );

  let initialSecondsRemaining = parseInt(
    (timeDifferenceInMiliseconds / 1000).toFixed(0)
  );

  // SAFE COUNTDOWN
  if (initialSecondsRemaining !== 0) {
    initialSecondsRemaining = initialSecondsRemaining + 2;
  }

  const [remainingSeconds, setRemainingSeconds] = useState(
    initialSecondsRemaining
  );

  useEffect(() => {
    if (initialSecondsRemaining < 0) {
      return;
    }

    const timer = setInterval(() => {
      setRemainingSeconds((prevRemainingSeconds) => {
        if (prevRemainingSeconds > 0) {
          return prevRemainingSeconds - 1;
        } else {
          clearInterval(timer);

          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialSecondsRemaining]);

  return {
    remainingSeconds,
  };
};
