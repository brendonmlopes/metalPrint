import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function ToggleController(props) {
  const title = props.title || "All";
  const controls = props.control || []; // [{ title: "A" }, { title: "B" }, ...]

  // one boolean per control
  const [states, setStates] = useState(() => controls.map(() => false));

  const allOn = states.length > 0 && states.every(Boolean);

  const toggleAll = (checked) => {
    setStates(states.map(() => checked));
  };

  const toggleOne = (idx) => (e) => {
    const next = [...states];
    next[idx] = e.target.checked;
    setStates(next);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={allOn}
            onChange={(e) => toggleAll(e.target.checked)}
          />
        }
        label={`${title}: ${allOn ? "On" : "Off"}`}
      />

      {controls.map((el, idx) => (
        <FormControlLabel
          key={el.id ?? el.title ?? idx}
          control={
            <Switch
              checked={!!states[idx]}
              onChange={toggleOne(idx)}
            />
          }
          label={`${el.title}: ${states[idx] ? "On" : "Off"}`}
        />
      ))}
    </div>
  );
}

