import Container from './UI/Container.tsx';
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx';
import { useState, useEffect, useRef } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const intervalRef = useRef<number | null>(null); //type is a number, because setInterval returns a number (a timer id)
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      intervalRef.current = timer;
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

//ALTERNATIVE WITHOUT USEREF
// import Container from './UI/Container.tsx';
// import { type Timer as TimerProps } from '../store/timers-context.tsx';
// import { useState, useEffect } from 'react';

// export default function Timer({ name, duration }: TimerProps) {
//   const [remaining, setRemaining] = useState(duration * 1000); // Convert to milliseconds

//   useEffect(() => {
//     if (remaining <= 0) return; // Prevent timer from starting if already at 0

//     const interval = setInterval(() => {
//       setRemaining((prev) => Math.max(prev - 1000, 0)); // Decrement and stop at 0
//     }, 1000); // Changed interval to 1000ms for 1-second decrement

//     // Cleanup function
//     return () => {
//       clearInterval(interval);
//     };
//   }, [remaining]); // Depend on `remaining` to stop the interval

//   const formattedRemainingTime = (remaining / 1000).toFixed(2); // Convert to seconds

//   return (
//     <Container as='article'>
//       <h2>{name}</h2>
//       <p>
//         <progress max={duration} value={formattedRemainingTime} />
//       </p>

//       <p>
//         <strong>{formattedRemainingTime}</strong> seconds remaining
//       </p>
//     </Container>
//   );
// }
