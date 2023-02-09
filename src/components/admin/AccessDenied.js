import "./Admin.css";
import Topbar from "./Topbar";

function Main() {
    return (
        <div className='admin-panel'>
            <Topbar />
            <div className="admin-panel-main">
            <p>You do not have the right permissions for this page</p>
            </div>
           </div>
    )
};

export default Main;