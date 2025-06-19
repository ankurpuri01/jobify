import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function HomeLayout(){
    return (
        <div>
        <Outlet />
        </div>  
    );  
}
export default HomeLayout;