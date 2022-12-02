import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CourseService from '../services/CourseService'


const CourseComponent = () => {
    
   
    const [courses, setCourses] = useState([])
    
    useEffect(() => {

        getAllCourses();
    }, [])

    const getAllCourses = () => {
        CourseService.getAllCourses().then((response) => {
            setCourses(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteCourse = (CourseId) => {
       CourseService.deleteCourse(CourseId).then((response) =>{
        getAllCourses()
        console.log(response.data);

       }).catch(error =>{
           console.log(error);
       })
        
    }



    return (
        <div className = "container ">
            <h2 className = "text-center mt-5 text-dark" > Course DETAILS </h2>

            <Link to = "/add-Course" 
                  className = "btn btn-dark btn-outline-light"> ADD Course </Link>


            <table className="table card-header table-secondary table-bordered table-hover table-lg text-dark bg-secondary ">
                <thead className = "text-center bg-light">
                            <th>Course Id</th>
                            <th>Course Name </th>
                            <th>Course Type </th>
                            <th>Fees</th>
                            <th>Action </th>

                </thead>
                <tbody className = "text-center text-dark">
                    {
                        courses.map(
                            Course =>
                            <tr key = {Course.id}> 
                                <td>{Course.courseId}</td>
                                <td>{Course.courseName}</td>
                                <td>{Course.courseType}</td>
                                <td>{Course.fees}</td>
                                <td>
                                <Link className="btn btn-light btn-sm btn-outline-primary" 
                                        style = {{marginLeft:"4px" ,marginBottom:"2px",padding:"1px"}} 
                                        to={`/edit-Course/${Course.CourseId}`}>UPDATE</Link>
                                                <br></br>
                                <button className = "btn btn-light btn-sm btn-outline-danger" 
                                        onClick = {() => deleteCourse(Course.CourseId)}
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

export default CourseComponent;