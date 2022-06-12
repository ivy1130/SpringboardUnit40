import React from "react";

const MadlibResult = ({noun, noun2, adjective, color, visible}) => 
  (visible && <p>There was a {color} {noun} who loved a {adjective} {noun2}.</p>)


export default MadlibResult