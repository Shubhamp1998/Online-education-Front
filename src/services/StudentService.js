import axios from 'axios'

const GET_ALLSTD = 'http://localhost:8092/student/allStudent';

const POST_STD = 'http://localhost:8092/student/addStudent';

const UPDATE_STD = 'http://localhost:8092/student/putStudent';

const DELETE_STD = 'http://localhost:8092/student/deleteStudent';

const GET_BYSTDID = 'http://localhost:8092/student/student';

class StudentService{

    getAllStudents(){
        return axios.get(GET_ALLSTD)
    }

    createStudent(students){
        return axios.post(POST_STD, students)
    }

    getStudentById(studentId){
        return axios.get(GET_BYSTDID + '/' + studentId);
    }

    updateStudent(studentId, student){
        return axios.put(UPDATE_STD + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(DELETE_STD + '/' + studentId);
    }
}

export default new StudentService();