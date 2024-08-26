import React from 'react'
// import { ClearUsers } from '../Store/Slices/User_Slice'

import { ClearUsers_Import } from '../Store/Actions'
import { useDispatch } from 'react-redux'
const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const deleteUsers = () =>{
      dispatch(ClearUsers_Import())
  }
  return (
    <div className="d-flex justify-content-center mt-4">
      <button className="btn btn-danger btn-lg"
      onClick={deleteUsers}>
        Clear Users
      </button>
    </div>

    )
}

export default DeleteAllUser