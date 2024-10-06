import PropTypes from "prop-types";
import { useState } from "react";
export default function InputArea({ AddToDo }) {
  const [NewToDo, setNewToDo] = useState("");

  const onChange = (event) => {
    setNewToDo(event.target.value);
  };

  const HandleKeyDown = (event) => {
    if (event.key === "Enter") {
      AddToDo(NewToDo);
      setNewToDo("");
    }
  };

  return (
    <div className="inputArea">
      <input
        value={NewToDo}
        placeholder="new to do"
        onChange={onChange}
        onKeyDown={HandleKeyDown}
      />
    </div>
  );
}

InputArea.propTypes = {
  AddToDo: PropTypes.func,
};
