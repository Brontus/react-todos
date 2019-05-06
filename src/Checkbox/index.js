import React, { useState } from "react"
import "./index.css"

function Checkbox({ onChange, checked }) {
  return (
    <div className="Checkbox" onClick={() => onChange(!checked)}>
      {checked ? (
        <div className="checkedBox">
          <div className="icon" />
        </div>
      ) : (
        <div className="notCheckedBox" />
      )}
    </div>
  )
}

export default Checkbox
