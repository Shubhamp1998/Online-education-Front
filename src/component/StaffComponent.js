import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import StaffService from '../services/StaffService'


const StaffComponent = () => {
    
   
    const [staffs, setStaffs] = useState([])
    
    useEffect(() => {

        getAllStaffs();
    }, [])

    const getAllStaffs = () => {
        StaffService.getAllStaffs().then((response) => {
            setStaffs(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStaff = (staffId) => {
       StaffService.deleteStaff(staffId).then((response) =>{
        getAllStaffs()
        console.log(response.data);

       }).catch(error =>{
           console.log(error);
       })
        
    }



    return (
        <div className = "container ">
            <h2 className = "text-center mt-5 text-dark" > Staff DETAILS </h2>

            <Link to = "/add-Staff" 
                  className = "btn btn-dark btn-outline-light"> ADD Staff </Link>


            <table className="table card-header table-secondary table-bordered table-hover table-lg text-dark bg-secondary ">
                <thead className = "text-center bg-light">
                            <th>Staff Id</th>
                            <th>Staff Name </th>
                            <th>Email </th>
                            <th>Mobile No</th>
                            <th>Action </th>

                </thead>
                <tbody className = "text-center text-dark">
                    {
                        staffs.map(
                            Staff =>
                            <tr key = {Staff.id}> 
                                <td>{Staff.staffId}</td>
                                <td>{Staff.name}</td>
                                <td>{Staff.emailId}</td>
                                <td>{Staff.mobileNumber}</td>
                                <td>
                                <Link className="btn btn-light btn-sm btn-outline-primary" 
                                        style = {{marginLeft:"4px" ,marginBottom:"2px",padding:"1px"}} 
                                        to={`/edit-Staff/${Staff.staffId}`}>UPDATE</Link>
                                                <br></br>
                                <button className = "btn btn-light btn-sm btn-outline-danger" 
                                        onClick = {() => deleteStaff(Staff.staffId)}
                                        style = {{marginLeft:"4px",padding:"3px"}}> DELETE</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StaffComponent;