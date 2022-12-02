import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService'


const AddStudentComponent = () => {


    const [studentId,setStudentId]=useState("")
    const [username,setUsername]=useState("")
    const [studentName,setStudentName]=useState("")
    const [email,setEmail]=useState("")
    const [mobNo,setMobNo]=useState("")
    const [courseId,setCourseId]=useState("")

    const [error, setError] = useState(false)


    const Navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

         const Student = {studentId, username, studentName, email, mobNo, courseId}
    if(studentId&&username&&studentName&&email&&mobNo&&courseId) { 
        if(id){
            StudentService.updateStudent(studentId, Student).then((response) => {
                console.log(response.data)
                Navigate('/admin')
                alert("Updated")
            }).catch(error => {
                console.log(error)
            })

        }else{
            StudentService.createStudent(Student).then((response) =>{

                console.log(response.data)
    
                Navigate('/admin');
                alert("New Student added")
    
            }).catch(error => {
                console.log(error)
            })
        }
    }  
    if(studentId.length===0||username.length===0||studentName.length===0||email.length===0||mobNo.length===0||courseId.length===0){
        setError(true)
    }
    }

    useEffect(() => {

        StudentService.getStudentById(studentId).then((response) =>{
            console.log(response)
            setStudentId(response.data.studentId)
            setUsername(response.data.username)
            setStudentName(response.data.studentName)
            setEmail(response.data.email)
            setMobNo(response.data.mobNo)
            setCourseId(response.data.courseId)

        }).catch(error => {
            console.log(error)
        })
    },)

    const title = () => {

        if(id){
            return <h2 className = "text-center ">UPDATE STUDENT</h2>
        }else{
            return <h2 className = "text-center ">ADD NEW STUDENT</h2>
        }
    }


    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "shodow-lg">
                    <div className = "card shadow-lg col-md-6 offset-md-1 offset-md-3  bg-secondary text-light">
                       {
                           title()
                       }
                        <div className = "card-body ">
                            <form >
                                <div className = "form-group mb-2" >
                                    <label className = "form-label" > Student Id </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Student id"
                                        name = "studentId"
                                        className = "form-control"
                                        value = {studentId}
                                        onChange = {(e) => setStudentId(e.target.value)}
                                    >  
                                    </input>
                                    {
                                        error&&studentId.length<=0?
                                    <label className='text-warning'>Student Id Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label "> User name </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter User name"
                                        name = "username"
                                        className = "form-control"
                                        value = {username}
                                        onChange = {(e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                    {
                                        error&&studentId.length<=0?
                                    <label className='text-warning'>Student Id Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> studentName </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Student Name"
                                        className = "form-control"
                                        value = {studentName}
                                        onChange = {(e) => setStudentName(e.target.value)}>
                                            
                                    </input>
                                    {
                                        error&&studentId.length<=0?
                                    <label className='text-warning'>Student Id Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Email ID"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}>
                                    </input>
                                    {
                                        error&&email.length<=0?
                                    <label className='text-warning'>Email Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile No name </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Mobile No"
                                        className = "form-control"
                                        value = {mobNo}
                                        onChange = {(e) => setMobNo(e.target.value)}>
                                    </input>
                                    {
                                        error&&mobNo.length<=0?
                                    <label className='text-warning'>Mobile No Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course ID </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter manager name"
                                        name = "courseId"
                                        className = "form-control"
                                        value = {courseId}
                                        onChange = {(e) => setCourseId(e.target.value)}
                                    >
                                    </input>
                                    {
                                        error&&courseId.length<=0?
                                    <label className='text-warning'>courseId Can Not Be Empty</label>
                                    :""}
                                </div>

                               <button className = "btn btn-success mt-3 btn-outline-light" style = {{marginRight:"4px"}} onClick = {(e) => saveOrUpdateStudent(e)} >SUBMIT </button>
                                <Link to="/admin" className="btn mt-3 btn-danger btn-outline-light"> CANCLE </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddStudentComponent;