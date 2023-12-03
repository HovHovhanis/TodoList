export function mapStateToProps(state){
    return {
       todos : state.todoReducer.todos
    }
}
