// function Admin (){
//     return (
//         <h1>Welcome To Admin board</h1>
//     )
// }

// export default Admin;


import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'


const Student = () => {
    
   
    const [students, setStudents] = useState([])
    
    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteStudent = (studentId) => {
       StudentService.deleteStudent(studentId).then((response) =>{
        getAllStudents()
        console.log(response.data);

       }).catch(error =>{
           console.log(error);
       })
        
    }



    return (
        <div className = "container ">
            <h2 className = "text-center mt-5 text-dark" > STUDENT DETAILS </h2>

            <Link to = "/add-student" 
                  className = "btn btn-dark btn-outline-light"> ADD STUDENT </Link>


            <table className="table card-header table-secondary table-bordered table-hover table-lg text-dark bg-secondary ">
                <thead className = "text-center bg-light">
                            <th>Student Id</th>
                            <th>Username </th>
                            <th>Student Name </th>
                            <th>Email </th>
                            <th>Mobile No</th>
                            <th>Course ID </th>
                            <th>Action </th>

                </thead>
                <tbody className = "text-center text-dark">
                    {
                        students.map(
                            student =>
                            <tr key = {student.id}> 
                                <td>{student.studentId}</td>
                                <td>{student.username}</td>
                                <td>{student.studentName}</td>
                                <td>{student.email}</td>
                                <td>{student.mobNo}</td>
                                <td>{student.courseId}</td>
                                <td>
                                <Link className="btn btn-light btn-sm btn-outline-primary" 
                                        style = {{marginLeft:"4px" ,marginBottom:"2px",padding:"1px"}} 
                                        to={`/edit-student/${student.studentId}`}>UPDATE</Link>
                                                <br></br>
                                <button className = "btn btn-light btn-sm btn-outline-danger" 
                                        onClick = {() => deleteStudent(student.studentId)}
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

export default Student;