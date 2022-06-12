import { useState } from 'react';
const useToggleState = () => {
  // Set initial form state to be visible and story state to not visible. Everytime toggle state is called, it will flip the states of both.
  const [formState, setFormState] = useState(true);
  const [storyState, setStoryState] = useState(false);
  const toggleState = () => {
    console.log("in toggle state")
    setFormState(state => !state)
    setStoryState(state => !state)
  }
  return [formState, storyState, toggleState]
}
export default useToggleState;