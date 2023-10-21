import "../css/TodoTemplate.css";

const TodoTemplate = ({ children }) => {
    return (
      <div className="TodoTemplate">
        <div className="app-title">todo List</div>
        <div className="content">{children}</div>
      </div>
    );
  };
  
  export default TodoTemplate;