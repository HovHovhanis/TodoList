export const mapDispatchToProps = (dispatch) => {
    return {
        
       addToDo: (task) => {
            const action =  {
            type: 'ADD_TODO',
            payload: task
            }
            dispatch(action)
        },
        deleteToDo: (id) => {
            const action =  {
                type: 'DELETE',
                payload: id
            }
            dispatch(action)
        },
        doneTodo: (id, isDone) => {
            const action = {
              type: 'Done',
              payload: {
                id,
                isDone,
              },
            }
            dispatch(action)
        },
        changeTodo: (id, title) => {
            const action = {
              type : 'Change',
              payload: {
                id,
                title
              }
            }
            dispatch(action)
        }
    }
}