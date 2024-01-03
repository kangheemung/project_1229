import { useState } from 'react'; // Only useState is imported now

export const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = () => setIsToggled(!isToggled);

  return [isToggled, toggle];
};
