import "./Admin.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Main() {
    return (
        <div className='admin-panel'>
            <Topbar />
            <div className='sidebar-container'>
                <Sidebar />
            </div>
            <div className="admin-panel-main">
            <p>welcome to the admin page</p>
            </div>
           </div>
    )
};

export default withAuthenticationRequired(Main);