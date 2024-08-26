import React from "react";
import  DeleteAllUser  from "./DeleteAllUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { fakeUserdata } from "../api";
import {useDispatch,useSelector} from 'react-redux'
import { addUser } from "../Store/Slices/User_Slice";
import DisplayUsers from "./DisplayUsers";
const UserDetails = () => {

const dispatch=useDispatch()


  const addNewUser=(payload)=>{
      console.log(payload)
      dispatch(addUser(payload))
  }

  
  return (
    <section className="container my-4">
      <div className="content">
        <div className="d-flex justify-content-between flex-wrap mb-4">
          <div className="h2">List of User Details</div>
          <button className="btn btn-primary"
           onClick={()=>{addNewUser(fakeUserdata())}}>Add New Users</button>
        </div>
        
        <ul className="list-group list-group-flush">
        <DisplayUsers/>
        </ul>

        <hr />
        <DeleteAllUser />
      </div>
    </section>
  );
};

export default UserDetails;
