import { Link } from "react-router-dom";

function AdminBoard(){
    return(
        // <h1>Welcome To Admin Board</h1>
        <div>
            <h1>Welcome To Admin Board</h1>
            <Link to="/admin" className="btn mt-3 btn-warning btn-outline-secondary"> STUDENT </Link>
            <Link to="/staff" className="btn mt-3 offset-md-1 btn-warning btn-outline-secondary">  STAFF  </Link>
            <Link to="/course" className="btn mt-3 offset-md-1 btn-warning btn-outline-secondary">  COURSES  </Link>
        </div>
        
        )
}

export default AdminBoard;