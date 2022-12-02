import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import StaffService from '../services/StaffService'


const AddStaffComponent = () => {


    const [staffId,setStaffId]=useState()
    const [name,setName]=useState("")
    const [emailId,setEmailId]=useState("")
    const [mobileNumber,setMobileNumber]=useState("")


    const Navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStaff = (e) => {
        e.preventDefault();

         const Staff = {staffId, name, emailId, mobileNumber}
            
        if(id){
            StaffService.updateStaff(staffId, Staff).then((response) => {
                console.log(response.data)
                Navigate('/staff')
                alert("Updated")
            }).catch(error => {
                console.log(error)
            })

        }else{
            StaffService.createStaff(Staff).then((response) =>{

                console.log(response.data)
    
                Navigate('/staff');
                alert("New Staff added")
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        StaffService.getStaffById(id).then((response) =>{
            console.log(response)
            setStaffId(response.data.staffId)
            setName(response.data.name)
            setEmailId(response.data.emailId)
            setMobileNumber(response.data.mobileNumber)

        }).catch(error => {
            console.log(error)
        })
    },[id])

    const title = () => {

        if(id){
            return <h2 className = "text-center ">UPDATE STAFF</h2>
        }else{
            return <h2 className = "text-center ">ADD NEW STAFF</h2>
        }
    }


    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "shodow-lg">
                    <div className = "card shadow-lg col-md-10 offset-md-1  bg-secondary text-light">
                       {
                           title()
                       }
                        <div className = "card-body ">
                            <form >
                                <div className = "form-group mb-2 col-md-3 " >
                                    <label className = "form-label" > Staff Id </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Staff id"
                                        name = "staffId"
                                        className = "form-control"
                                        value = {staffId}
                                        onChange = {(e) => setStaffId(e.target.value)}
                                    >  
                                    </input>
                                    
                                </div>

                                <div className = "form-group mb-5 col-md-3  offset-md-4" style={{marginTop:'-9%'}}>
                                    <label className = "form-label "> User name </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mt-2 col-md-3 mb-3" style={{marginTop:'-9%'}}>
                                    <label className = "form-label"> emailId Id </label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter emailId ID"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}>
                                    </input>
                                </div>

                                <div className = "form-group mb-2 col-md-3 offset-md-4" style={{marginTop:'-9%'}}>
                                    <label className = "form-label"> Mobile No name </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Mobile No"
                                        className = "form-control"
                                        value = {mobileNumber}
                                        onChange = {(e) => setMobileNumber(e.target.value)}>
                                    </input>
                                </div>

                               <button className = "btn btn-success mt-3 btn-outline-light" style = {{marginRight:"4px"}} onClick = {(e) => saveOrUpdateStaff(e)} >SUBMIT </button>
                                <Link to="/staff" className="btn mt-3 btn-danger btn-outline-light"> CANCLE </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddStaffComponent;