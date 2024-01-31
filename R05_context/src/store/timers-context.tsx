import { type ReactNode, createContext } from 'react';

// types:
type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

// context:
const TimersContext = createContext<TimersContextValue | null>(null);

// provider component:
type TimersContextProviderProps = {
  children: ReactNode;
};
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // ...
    },
    startTimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
