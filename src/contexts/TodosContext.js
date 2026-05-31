import { createContext, useContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

export const TodosContext = createContext([]);
export const dispatchContext = createContext(null);
const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </TodosContext.Provider>
  );
};
export const useTodos = () => {
  return useContext(TodosContext);
};
export const useTodosDispatch = () => {
  return useContext(dispatchContext);
};
export default TodosProvider;
// export const TodosContext = createContext([]);
