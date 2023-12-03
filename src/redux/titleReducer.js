import {TITLE} from './types'

const initialState = {
     title : 'Your title'
}

export const titleReducer = (state = initialState , action ) => { 
    switch(action.type){
         case TITLE: 
             console.log(action)
            return{
                 title: action.text
            } 
        default: 
         return state
    }
}