import PropTypes from "prop-types";

export default function ToDoList({ children }) {
  const ToDo = children.map((child, index) => <li key={index}>{child}</li>);
  return (
    <div className="todolist">
      <ul>{ToDo}</ul>
    </div>
  );
}

ToDoList.propTypes = {
  children: PropTypes.array,
};
