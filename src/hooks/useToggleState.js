import { useState } from 'react'

function useToggleState(initialVal = false) {
  //ca;; useState, reserve a peice of state
  const [state, setState] = useState(initialVal)
  const toggle = () => {
    setState(!state)
  }
  //return piece of state and funtion to toggle it
  return [state, toggle]
}
export default useToggleState