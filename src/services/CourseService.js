import axios from 'axios'

const GET_ALLCRS = 'http://localhost:8092/course/allCourses';

const POST_CRS = 'http://localhost:8092/course/addCourse';

const UPDATE_CRS = 'http://localhost:8092/course/putCourse';

const DELETE_CRS = 'http://localhost:8092/course/deleteCourse';

const GET_BYCRSID = 'http://localhost:8092/course/course';

class CourseService{

    getAllCourses(){
        return axios.get(GET_ALLCRS)
    }

    createCourse(Courses){
        return axios.post(POST_CRS, Courses)
    }

    getCourseById(CourseId){
        return axios.get(GET_BYCRSID + '/' + CourseId);
    }

    updateCourse(CourseId, Course){
        return axios.put(UPDATE_CRS + '/' + CourseId, Course);
    }

    deleteCourse(CourseId){
        return axios.delete(DELETE_CRS + '/' + CourseId);
    }
}

export default new CourseService();