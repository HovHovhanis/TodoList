import { DELETE , ADD_TODO, Done, Change } from "./types"

const initialState = {
     todos: [
          {
               id: 1 , 
               title: 'Hello',
               isDone: false,
               isActive: false
          }
     ],
}


export const todoReducer = (state = initialState , action) => {
    switch(action.type){
          case  ADD_TODO : 
               return{
                    ...state,
                    todos: [...state.todos, action.payload]
               }
          case DELETE: 
               const updateTasks = state.todos.filter((item, i) => item.id !== action.payload)
               console.log(updateTasks , "updateTasks")
               return {
                    ...state,
                    todos: updateTasks
               } 
          case Done:
               const updatedTodos = state.todos.map(item => 
                 item.id === action.payload.id
                   ? { ...item, isDone: action.payload.isDone } 
                   : item
               );
               return {
                 ...state,
                 todos: updatedTodos
               }
          case Change: 
               const changeTodos = state.todos.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item)
               console.log(changeTodos)
               return {
                    ...state,
                    todos : changeTodos
               }
          default: 
               return state
    }
}




 