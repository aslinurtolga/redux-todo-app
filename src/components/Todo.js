import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✏️</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add Items.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((element) => {
              return (
                <div className="eachItem" key={element.id}>
                  <h3>{element.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() =>
                        dispatch(deleteTodo(element.id), setInputData(""))
                      }
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo(removeTodo.id))}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
