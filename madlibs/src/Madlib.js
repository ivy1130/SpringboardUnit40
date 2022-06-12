import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibResult from "./MadlibResult";
import useToggleState from "./hooks/useToggleState";
import "./Madlib.css"

const Madlib = () => {
  const INITIAL_STATE={}

  // Set states for resulting form data, and form and story states to determine visibility.
  const [madlibResult, setMadlibResult] = useState(INITIAL_STATE)
  const [formState, storyState, toggleState] = useToggleState()

  // Receive date from form and populate the madlibResult object
  const addMadlib = (formData) => {
    setMadlibResult(formData)
  }

  const {noun, noun2, adjective, color} = madlibResult

  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>
      <MadlibForm addMadlib={addMadlib} visible={formState} toggleState={toggleState}/>
      <MadlibResult noun={noun} noun2={noun2} adjective={adjective} color={color} visible={storyState}/>
    </div>
  )
}

export default Madlib