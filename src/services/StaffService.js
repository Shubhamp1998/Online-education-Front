import axios from 'axios'

const GET_ALLSTF = 'http://localhost:8092/staff/allStaff';

const POST_STF = 'http://localhost:8092/staff/addStaff';

const UPDATE_STF = 'http://localhost:8092/staff/putStaff';

const DELETE_STF = 'http://localhost:8092/staff/deleteStaff';

const GET_BYSTFID = 'http://localhost:8092/staff/staff';

class staffService{

    getAllStaffs(){
        return axios.get(GET_ALLSTF)
    }

    createStaff(staffs){
        return axios.post(POST_STF, staffs)
    }

    getStaffById(staffId){
        return axios.get(GET_BYSTFID + '/' + staffId);
    }

    updateStaff(staffId, staff){
        return axios.put(UPDATE_STF + '/' + staffId, staff);
    }

    deleteStaff(staffId){
        return axios.delete(DELETE_STF + '/' + staffId);
    }
}

export default new staffService();