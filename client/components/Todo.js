import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li>
    <label 
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    ><input 
        type="checkbox"
        onChange={onClick}
        checked={completed}
      />
      {text}
    </label>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
