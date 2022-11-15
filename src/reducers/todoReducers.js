// import { useState } from "react";

const initialData = {
  list: [],
};

// const [list, setList] = useState([])
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((element) => element.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVETODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducers;