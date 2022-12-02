import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import CourseService from '../services/CourseService'


const AddCourseComponent = () => {


    const [courseId,setCourseId]=useState("")
    const [courseName,setCourseName]=useState("")
    const [courseType,setCourseType]=useState("")
    const [fees,setFees]=useState("")

    const [error, setError] = useState(false)


    const Navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateCourse = (e) => {
        e.preventDefault();

         const Course = {courseId, courseName, courseType, fees}
    if(courseId&&courseName&&courseType&&fees) { 
        if(id){
            CourseService.updateCourse(courseId, Course).then((response) => {
                console.log(response.data)
                Navigate('/course')
                alert("Course Updated")
            }).catch(error => {
                console.log(error)
            })

        }else{
            CourseService.createCourse(Course).then((response) =>{

                console.log(response.data)
    
                Navigate('/course');
                alert("New Course Added")
    
            }).catch(error => {
                console.log(error)
            })
        }
    }  
    if(courseId.length===0||courseName.length===0||courseType.length===0||fees.length===0){
        setError(true)
    }
    }

    useEffect(() => {

        CourseService.getCourseById(courseId).then((response) =>{
            console.log(response)
            setCourseId(response.data.CourseId)
            setCourseName(response.data.CourseName)
            setCourseType(response.data.courseType)
            setFees(response.data.fees)

        }).catch(error => {
            console.log(error)
        })
    },)

    const title = () => {

        if(id){
            return <h2 className = "text-center ">UPDATE COURSE</h2>
        }else{
            return <h2 className = "text-center ">ADD NEW COURSE</h2>
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
                                    <label className = "form-label" > Course Id </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Course id"
                                        name = "CourseId"
                                        className = "form-control"
                                        value = {courseId}
                                        onChange = {(e) => setCourseId(e.target.value)}
                                    >  
                                    </input>
                                    {
                                        error&&courseId.length<=0?
                                    <label className='text-warning'>Course Id Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> CourseName </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Course Name"
                                        className = "form-control"
                                        value = {courseName}
                                        onChange = {(e) => setCourseName(e.target.value)}>
                                            
                                    </input>
                                    {
                                        error&&courseId.length<=0?
                                    <label className='text-warning'>Course Id Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Course Type </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Course Type"
                                        className = "form-control"
                                        value = {courseType}
                                        onChange = {(e) => setCourseType(e.target.value)}>
                                    </input>
                                    {
                                        error&&courseType.length<=0?
                                    <label className='text-warning'>CourseType Can Not Be Empty</label>
                                    :""}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Fees </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Fees Of Course"
                                        className = "form-control"
                                        value = {fees}
                                        onChange = {(e) => setFees(e.target.value)}>
                                    </input>
                                    {
                                        error&&fees.length<=0?
                                    <label className='text-warning'>Fees Can Not Be Empty</label>
                                    :""}
                                </div>

                               <button className = "btn btn-success mt-3 btn-outline-light" style = {{marginRight:"4px"}} onClick = {(e) => saveOrUpdateCourse(e)} >SUBMIT </button>
                                <Link to="/course" className="btn mt-3 btn-danger btn-outline-light"> CANCLE </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddCourseComponent;