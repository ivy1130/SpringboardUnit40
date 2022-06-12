import React, { useState } from "react";
import "./MadlibForm.css"

const MadlibForm = ({ addMadlib, visible, toggleState}) => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({
      ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toggleState()
    addMadlib({...formData})
  }

  return (visible &&
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Noun:</label>
      <input
        id="noun"
        type="text"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />
      <label htmlFor="task">Noun 2:</label>
      <input
        id="noun2"
        type="text"
        name="noun2"
        placeholder="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <label htmlFor="task">Adjective:</label>
      <input
        id="adjective"
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <label htmlFor="task">Color:</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Submit!</button>
    </form>
  )
}

export default MadlibForm