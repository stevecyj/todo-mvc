import "./App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <h3>Tasks</h3>
      </header>

      <div className="add-todo">
        <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
        <div className="add-todo-input">
          <input id="add-todo-input" type="text" placeholder="新增工作" />
        </div>
        <div className="add-todo-action">
          <button className="btn-reset btn-add"> 新增 </button>
        </div>
      </div>

      <div className="todos">
        <div className="task-item">
          <div className="task-item-checked">
            <span className="icon icon-checked">{/* icon-check-circle */}</span>
          </div>

          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
            <input
              className="task-item-body-input"
              type="text"
              placeholder="新增工作"
            />
          </div>
          <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
          </div>
        </div>
        <div className="task-item edit">
          <div className="task-item-checked">
            <span className="icon icon-checked">{/* icon-check-hover */}</span>
          </div>

          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
            <input
              className="task-item-body-input"
              type="text"
              placeholder="新增工作"
            />
          </div>
          <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
          </div>
        </div>
        <div className="task-item done">
          <div className="task-item-checked">
            <span className="icon icon-checked">{/* icon-check-active */}</span>
          </div>
          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
            <input
              className="task-item-body-input"
              type="text"
              placeholder="新增工作"
            />
          </div>
          <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
          </div>
        </div>
      </div>

      <footer>
        <p>剩餘項目: 3</p>
      </footer>
    </div>
  );
}

export default App;
