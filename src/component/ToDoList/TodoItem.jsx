import React,  { useState } from 'react'

import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { PiPencilSimpleFill } from "react-icons/pi";
import { GrUpdate } from "react-icons/gr";
import styles from '../../style/todo.module.css';


export const TodoItem = (props) => {

    const [active, setActive] = useState(false)
    const [title, setTitle] = useState('')

    const removeTask = (id) => {
        props.deleteToDo(id)
      }
    
      const doneTask = (id, isDone) => {
        props.doneTodo(id, !isDone);
      }
    
      const changeTasks = (id, title) => {
        props.changeTodo(id, title)
        setTitle('')
        setActive(false)
      }

   const todoItem =  props.todos.map((item, index) => {
        return (
          <li className={styles['todo-item']} key={index}>

            <div className={styles.box}>
              <button onClick={() => doneTask(item.id, item.isDone)} className={styles.done}>
                <IoMdDoneAll />
              </button>
              <p style={{ color: item.isDone ? '#fff' : '', textDecoration: item.isDone ? 'line-through' : '' }}>
                {item.title}
              </p>
            </div>

            <div className={styles.box}>
              <button onClick={() => removeTask(item.id)} className={styles.remove} >
                <FaDeleteLeft />
              </button>
              {
                active ?
                  <>
                    <input onChange={(e) => setTitle(e.target.value)} type='text' />
                    <button onClick={() => changeTasks(item.id, title)} className={styles.update}>
                      <GrUpdate />
                    </button>
                  </>
                  : <button onClick={() => setActive(!active)} className={styles.active}>
                      <PiPencilSimpleFill />
                    </button>
              }
            </div>
          </li>
        )
      })

  return (
    <div>
        {todoItem}
    </div>
  )
}
