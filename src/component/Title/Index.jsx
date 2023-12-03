
import React from 'react'
import styles from '../../style/title.module.css'
import { useDispatch , useSelector } from 'react-redux'
import {titleAction} from '../../redux/actions'

const Title = () => {
    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()

    const handelChange = (e) => {
        dispatch(titleAction(e.target.value))
    }



    return (
       <React.Fragment>
         <div className={styles.title}>
            <input
              type="text"
              placeholder="add a new title" 
              onChange={handelChange}

            /> 
         
         </div>
         <p>  {title} </p>
         </React.Fragment> 
    )
}


export default Title