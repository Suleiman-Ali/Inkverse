import { useState } from 'react';

export default function useToggle(initial: boolean) {
  const [isToggled, setIsToggled] = useState(initial);
  const toggleHandler = () => setIsToggled((prev) => !prev);
  return { isToggled, toggleHandler };
}
