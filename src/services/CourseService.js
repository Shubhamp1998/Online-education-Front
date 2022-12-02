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

    getCourseById(courseId){
        return axios.get(GET_BYCRSID + '/' + courseId);
    }

    updateCourse(courseId, Course){
        return axios.put(UPDATE_CRS + '/' + courseId, Course);
    }

    deleteCourse(courseId){
        return axios.delete(DELETE_CRS + '/' + courseId);
    }
}

export default new CourseService();