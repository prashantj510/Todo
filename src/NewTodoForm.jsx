import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label className="NewItem-label" htmlFor="item">
            NEW TODO
          </label>
          <textarea
            wrap="hard"
            className="Todo-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="textarea"
            id="item"
          />
        </div>
        {/* <button className="btn">Add</button> */}
        <button class="cta">
          <span>Add Todo</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </form>
    </div>
  );
}
