import React, { useState } from 'react';
import styles from '../../style/todo.module.css';
import { connect } from 'react-redux';
import Title from '../Title/Index';
import { mapStateToProps } from '../../props/stateProps';
import { mapDispatchToProps } from '../../props/dispatchProps';
import { TodoItem } from './TodoItem';

const TodoList = (props) => {

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
     if(newTask.trim() !== ''){
        props.addToDo({
          id: Date.now(),
          title:newTask
        })

        setNewTask('')
     }
  };

 
  return (
    <div className={styles.todoList}>
          <Title />
      <div className={styles.addTask}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
       <ul className={styles.container}>
          <TodoItem 
             todos={props.todos}
             deleteToDo={props.deleteToDo}
             doneTodo={props.doneTodo}
             changeTodo={props.changeTodo}
          />
       </ul>
    </div>
  );
};


export default  connect(mapStateToProps , mapDispatchToProps)(TodoList);


