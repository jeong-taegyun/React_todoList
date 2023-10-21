import TodoListItem from "./TodoListItem";
import "../css/TodoList.css";

const TodoList = ({ todoList, onRemove, onToggle }) => {
    return (
      <div className="TodoList">
        {todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>
    );
  };
  
  export default TodoList;