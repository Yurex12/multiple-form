import { ReactElement, useState } from 'react';

type StepProps = {
  next: () => void;
  back: () => void;
  isLast: boolean;
  goTo: (index: number) => void;
  steps: ReactElement[];
  currentStepIndex: number;
  isFirst: boolean;
  step: ReactElement;
};

export function useMultipleForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    if (currentStepIndex >= steps.length - 1) return;
    setCurrentStepIndex((cur) => cur + 1);
  }

  function back() {
    if (currentStepIndex <= 0) return;
    setCurrentStepIndex((cur) => cur - 1);
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  const values: StepProps = {
    next,
    back,
    goTo,
    isLast: currentStepIndex === steps.length - 1,
    isFirst: currentStepIndex > 0,
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
  };

  return values;
}
