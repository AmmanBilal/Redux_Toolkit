import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md';
import {removeUser} from '../Store/Slices/User_Slice'

const DisplayUsers = () => {

    const data = useSelector((state) => state.user)
    const dispatch=useDispatch()

    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }
    return(
   
    <>
     {Array.isArray(data) && data.length > 0 ? (
        data.map((user, id) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name}
            <button className="btn btn-delete">
                <MdDeleteForever color='red' className='delete-icon' 
                onClick={()=>{
                    deleteUser(id)
                }}/>
                </button> 
          </li>
        ))
      ) : (
        <li className="list-group-item text-center">No users available</li>
      )}
    </>
    )
    }
    
    

export default DisplayUsers

